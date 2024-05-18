import express from "express";
import productRouter from "./products/products.route";
const registerRoutes = (app: express.Application) => {
  app.use("/products", productRouter);
};
export default registerRoutes;
