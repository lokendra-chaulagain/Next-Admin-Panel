import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./attendanceActions";

const initialState = {
  loading: false,
  attendance: [],
  error: null,
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(actions.takeEntryAttendance.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(actions.takeEntryAttendance.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.attendance = [action.payload];
        state.error = null;
      }),
      builder.addCase(actions.takeEntryAttendance.rejected, (state: any, action: any) => {
        state.loading = false;
        state.attendance = [];
        state.error = action.error.message;
      });
  },
} as any);

export const { reducer: attendanceReducer, actions: attendanceAction } = attendanceSlice;
