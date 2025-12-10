import express from "express";
import { validate } from "../middlewares/validation-handle.js";
import ServiceValidator from "../validations/service.validation.js";

import serviceController from "../controllers/service.controller.js";

const router = express.Router();

router.post("/", validate(ServiceValidator.create), serviceController.create);
router.get("/", serviceController.findAll);
router.get("/:id", serviceController.findOne);
router.put("/:id", validate(ServiceValidator.update), serviceController.update);
router.delete("/:id", serviceController.remove);

export default router;