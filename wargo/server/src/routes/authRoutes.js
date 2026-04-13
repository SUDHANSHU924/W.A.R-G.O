import { Router } from "express";
import { validate } from "../middleware/validateMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { loginSchema, signupSchema } from "../validators/index.js";
import * as authController from "../controllers/authController.js";

const router = Router();

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", validate(loginSchema), authController.login);
router.post("/logout", protect, authController.logout);
router.get("/me", protect, authController.getMe);

export default router;
