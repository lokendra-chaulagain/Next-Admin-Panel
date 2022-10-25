import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const askForLeave = createAsyncThunk("leave/add", async (leaveData: any) => {
  try {
    const res = await axios.post("http://localhost:4000/api/leave", leaveData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
