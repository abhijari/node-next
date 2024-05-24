import express, { Router } from "express";
import { categoryController } from "./categories.controller";
const router: Router = express.Router();

router.get("/", categoryController.getAllCategory);
router.post("/", categoryController.createCategory);

export default router;
