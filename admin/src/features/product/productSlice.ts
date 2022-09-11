import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./productAction";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducer: (builder: any) => {
    builder.addCase(actions.fetchAllProduct.pending, (state: any) => {
      state.loading = true;
    });

    builder.addCase(
      actions.fetchAllProduct.fulfilled,
      (state: any, action: any) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      }
    );

    builder.addCase(
      actions.fetchAllProduct.rejected,
      (state: any, action: any) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      }
    );
  },
} as any);

export const { reducer: productReducer, actions: productAction } = productSlice;
