import { configureStore } from "@reduxjs/toolkit";
import { attendanceReducer } from "./attendance/attendanceSlice";
import { employeeReducer } from "./employee/employeeSlice";
import { leaveReducer } from "./leave/leaveSlice";

export const store = configureStore({
  reducer: {
    employeeStore: employeeReducer,
    attendanceStore: attendanceReducer,
    leaveStore: leaveReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
