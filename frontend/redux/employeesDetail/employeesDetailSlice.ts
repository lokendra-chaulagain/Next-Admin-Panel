import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  employeesDetail: [],
  error: null,
};

//fetchAllEmployeesDetail
export const fetchAllEmployeesDetail = createAsyncThunk("employeesDetail/getAll", async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/employeeDetail/getAll");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

//employeesDetailSlice
export const employeesDetailSlice = createSlice({
  name: "employeesDetail",
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(fetchAllEmployeesDetail.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(fetchAllEmployeesDetail.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.employeesDetail = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchAllEmployeesDetail.rejected, (state: any, action: any) => {
        state.loading = false;
        state.employeesDetail = [];
        state.error = action.error.message;
      });
  },
} as any);

export const { reducer: employeesDetailReducer, actions: employeesDetailAction } = employeesDetailSlice;
