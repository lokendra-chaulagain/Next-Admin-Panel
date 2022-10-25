import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewEmployee = createAsyncThunk("employee/add", async (newEmployee: any) => {
  try {
    const res = await axios.post("http://localhost:4000/api/employee/add", newEmployee);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});


export const fetchAllEmployee = createAsyncThunk("employee/getAll", async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/employee/getAll");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
