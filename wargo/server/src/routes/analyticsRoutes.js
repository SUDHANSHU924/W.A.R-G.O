import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { analyticsSummarySchema } from "../validators/index.js";
import * as analyticsController from "../controllers/analyticsController.js";

const router = Router();

router.use(protect);
router.get("/summary", validate(analyticsSummarySchema), analyticsController.getSummary);

export default router;
