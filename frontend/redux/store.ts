import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./employee/employeeSlice";
// frontend\redux\employee\employeeSlice.ts

export const store = configureStore({
  reducer: {
   employeeStore: employeeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
