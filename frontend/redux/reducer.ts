import { employeesDetailReducer } from "./employeesDetail/employeesDetailSlice";

import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  team: employeesDetailReducer,
};

export const store = configureStore({
  reducer,
});

export default reducer;
