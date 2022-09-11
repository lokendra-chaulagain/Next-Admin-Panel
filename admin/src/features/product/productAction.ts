import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetchAllProduct
export const fetchAllProduct = createAsyncThunk("product/getAll", async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/product/get");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
