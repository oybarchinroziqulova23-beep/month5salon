import express from "express";
import { validate } from "../middleware/validation-handle.js";
import { userSchema } from "../validations/user.validation.js";

import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", validate(userSchema), userController.create);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.put("/:id", validate(userSchema), userController.update);
router.delete("/:id", userController.remove);

export default router;
