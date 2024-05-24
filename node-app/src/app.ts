import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import registerRoutes from "./routes";
import cors from "cors";

const PORT = 8082;
const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envFile });
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
registerRoutes(app);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
