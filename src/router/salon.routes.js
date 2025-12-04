import express from "express";
import { validate } from "../middleware/validation-handle.js";
import { salonSchema } from "../validations/salon.validation.js";

import salonController from "../controllers/salon.controller.js";

const router = express.Router();

router.post("/", validate(salonSchema), salonController.create);
router.get("/", salonController.findAll);
router.get("/:id", salonController.findOne);
router.put("/:id", validate(salonSchema), salonController.update);
router.delete("/:id", salonController.remove);

export default router;