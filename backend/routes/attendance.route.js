import { Router } from "express";
const router = Router();
import { takeEntryAttendance, takeExitAttendance } from "../controllers/attendance.controller.js";

router.post("/takeAttendance", takeEntryAttendance);
router.put("/update/:id", takeExitAttendance);

export default router;
