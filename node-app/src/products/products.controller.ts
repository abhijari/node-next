import { Request, Response } from "express";
import { productService } from "./products.service";

class ProductController {
  constructor() {}

  async getAllProduct(req: Request, res: Response) {
    try {
      const result = await productService.getAllProduct();
      res.status(200).send(result);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export const productController = new ProductController();
