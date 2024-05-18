import express from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import registerRoutes from "./routes";

const PORT = 8082;
const envFile = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envFile });

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
registerRoutes(app);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
