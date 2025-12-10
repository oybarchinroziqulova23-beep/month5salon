import express from "express";
import { envConfig } from "./config/index.js";
import { connectDB } from "./config/db.js";

import mainRouter from "./router/index.routes.js";
import { errorHandler } from "./middlewares/error-handle.js";
import { createSuperAdmin } from "./helpers/create-superadmin.js";

const app = express();
app.use(express.json());

connectDB();
createSuperAdmin();
app.use("/api", mainRouter);
app.use(errorHandler);

const PORT = envConfig.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

