import { Router } from "express";
const router = Router();
import { addProduct, getProducts } from "../controllers/product.controller.js";

//add
router.post("/add", addProduct);

router.get("/get", getProducts);

export default router;
