import express from "express";
import { validate } from "../middleware/validation-handle.js";
import { serviceSchema } from "../validations/service.validation.js";

import serviceController from "../controllers/service.controller.js";

const router = express.Router();

router.post("/", validate(serviceSchema), serviceController.create);
router.get("/", serviceController.findAll);
router.get("/:id", serviceController.findOne);
router.put("/:id", validate(serviceSchema), serviceController.update);
router.delete("/:id", serviceController.remove);

export default router;