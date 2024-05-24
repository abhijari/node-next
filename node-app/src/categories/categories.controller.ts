import { Request, Response } from "express";
import { categoryService } from "./categories.service";

class CategoryController {
  constructor() {}

  async getAllCategory(req: Request, res: Response) {
    try {
      const result = await categoryService.getAllCategory();
      res.status(200).send(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      console.log("first", req);
      const result = await categoryService.createCategory(req.body);
      res.status(200).send(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export const categoryController = new CategoryController();
