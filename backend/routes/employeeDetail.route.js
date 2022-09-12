import { Router } from "express";
const router = Router();
import {
  addEmployeeDetail,
  getAllEmployeeDetail,
} from "../controllers/employeeDetail.controller.js";

//add
router.post("/add", addEmployeeDetail);

//getALl
router.get("/getALl", getAllEmployeeDetail);

export default router;
