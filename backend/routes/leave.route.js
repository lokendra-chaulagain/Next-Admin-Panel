import { Router } from "express";
const router = Router();
import { takeLeave } from "../controllers/leave.controller.js";

router.post("/", takeLeave);

export default router;
