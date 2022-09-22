import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetchAllProduct
export const fetchAllProduct = createAsyncThunk("product/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/product/get");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducer: (builder: any) => {
    builder.addCase(fetchAllProduct.pending, (state: any) => {
      state.loading = true;
    });

    builder.addCase(fetchAllProduct.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });

    builder.addCase(fetchAllProduct.rejected, (state: any, action: any) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
} as any);

export const { reducer: productReducer } = productSlice;
