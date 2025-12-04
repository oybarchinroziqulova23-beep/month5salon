import express from "express";
import userRoutes from "./user.routes.js";
import salonRoutes from "./salon.routes.js";
import serviceRoutes from "./service.routes.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/salons", salonRoutes);
router.use("/services", serviceRoutes);

export default router;
