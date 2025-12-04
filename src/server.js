import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import router from "./router/index.js";
import { errorHandler } from "./middleware/error-handle.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();
app.use("/api", router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on port: ${PORT}`)
);
