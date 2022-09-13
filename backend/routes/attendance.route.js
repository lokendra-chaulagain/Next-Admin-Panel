import { Router } from "express";
import {
  addAttendanceStatus,
  getAllEmployeeAttendance,
} from "../controllers/attendance.controller.js";
const router = Router();

//add
router.post("/takeAttendance", addAttendanceStatus);

//get
router.get("/getAttendance", getAllEmployeeAttendance);

export default router;
