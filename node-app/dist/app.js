"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const PORT = 8082;
const envFile = path_1.default.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
dotenv_1.default.config({ path: envFile });
console.log(envFile);
console.log(process.env.NODE_ENV, process.env.DATABASE_URL);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("tiny"));
(0, routes_1.default)(app);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
