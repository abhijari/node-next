import express from "express";
import productRouter from "./products/products.route";
import categoryRouter from "./categories/categories.route";
const registerRoutes = (app: express.Application) => {
  app.use("/products", productRouter);
  app.use("/categories", categoryRouter);
};
export default registerRoutes;
