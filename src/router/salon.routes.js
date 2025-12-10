import express from "express";
import { validate } from "../middlewares/validation-handle.js";
import SalonValidator  from "../validations/salon.validation.js";

import salonController from "../controllers/salon.controller.js";

const router = express.Router();

router.post("/", validate(SalonValidator.create), salonController.create);
router.get("/", salonController.findAll);
router.get("/:id", salonController.findOne);
router.put("/:id", validate(SalonValidator.update), salonController.update);
router.delete("/:id", salonController.remove);

export default router;