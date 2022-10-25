import { Router } from "express";
const router = Router();
import { addEmployee, getAllEmployee } from "../controllers/employee.controller.js";

router.post("/add", addEmployee);
router.get("/getALl", getAllEmployee);

export default router;
