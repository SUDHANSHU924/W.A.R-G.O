import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { aiPlanSchema } from "../validators/index.js";
import * as aiController from "../controllers/aiController.js";

const router = Router();

router.use(protect);
router.post("/plan", validate(aiPlanSchema), aiController.generatePlan);

export default router;
