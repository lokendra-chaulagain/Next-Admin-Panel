import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./employeeActions";

const initialState = {
  loading: false,
  employee: [],
  error: null,
};

//employeesSlice
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllEmployee.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.fetchAllEmployee.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.employee = action.payload;
        state.error = null;
      }),
      builder.addCase(actions.fetchAllEmployee.rejected, (state: any, action: any) => {
        state.loading = false;
        state.employee = [];
        state.error = action.error.message;
      });

    //addNewEmployee
    builder.addCase(actions.addNewEmployee.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.addNewEmployee.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.employee = [action.payload];
        state.error = null;
      }),
      builder.addCase(actions.addNewEmployee.rejected, (state: any, action: any) => {
        state.loading = false;
        state.employee = [];
        state.error = action.error.message;
      });
  },
} as any);

export const { reducer: employeeReducer, actions: employeeAction } = employeeSlice;
