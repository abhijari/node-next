"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_route_1 = __importDefault(require("./products/products.route"));
const categories_route_1 = __importDefault(require("./categories/categories.route"));
const registerRoutes = (app) => {
    app.use("/products", products_route_1.default);
    app.use("/categories", categories_route_1.default);
};
exports.default = registerRoutes;
