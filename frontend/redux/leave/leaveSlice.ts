import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./leaveActions";

const initialState = {
  loading: false,
  leave: [],
  error: null,
};

export const leaveSlice = createSlice({
  name: "leave",
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(actions.askForLeave.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.askForLeave.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.leave = [action.payload];
        state.error = null;
      }),
      builder.addCase(actions.askForLeave.rejected, (state: any, action: any) => {
        state.loading = false;
        state.leave = [];
        state.error = action.error.message;
      });
  },
} as any);

export const { reducer: leaveReducer, actions: leaveAction } = leaveSlice;
