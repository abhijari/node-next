import express, { Router } from "express";
import { productController } from "./products.controller";
const router: Router = express.Router();

router.get("/", productController.getAllProduct);

export default router;
