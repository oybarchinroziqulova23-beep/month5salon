import express from "express";
import adminRoutes from "./admin.routes.js";
import salonRoutes from "./salon.routes.js";
import serviceRoutes from "./service.routes.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use("/salons", salonRoutes);
router.use("/services", serviceRoutes);

export default router;
