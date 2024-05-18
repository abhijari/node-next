"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_route_1 = __importDefault(require("./users/users.route"));
const registerRoutes = (app) => {
    app.use("/user", users_route_1.default);
};
exports.default = registerRoutes;
