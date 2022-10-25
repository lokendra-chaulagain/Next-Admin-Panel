import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const takeEntryAttendance = createAsyncThunk("attendance/add", async (data: any) => {
  try {
    const res = await axios.post("http://localhost:4000/api/attendance/takeAttendance", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
