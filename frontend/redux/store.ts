import { configureStore } from "@reduxjs/toolkit";
import { attendanceReducer } from "./attendance/attendanceSlice";
import { employeeReducer } from "./employee/employeeSlice";

export const store = configureStore({
  reducer: {
    employeeStore: employeeReducer,
    attendanceStore: attendanceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
