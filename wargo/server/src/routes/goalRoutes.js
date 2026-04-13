import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
	createGoalSchema,
	updateGoalSchema,
	goalIdParamSchema,
	goalStatusSchema,
	goalQuerySchema,
} from "../validators/index.js";
import * as goalController from "../controllers/goalController.js";

const router = Router();

router.use(protect);
router.post("/", validate(createGoalSchema), goalController.createGoal);
router.get("/", validate(goalQuerySchema), goalController.getGoals);
router.get("/:id", validate(goalIdParamSchema), goalController.getGoalById);
router.patch("/:id", validate(updateGoalSchema), goalController.updateGoal);
router.patch(
	"/:id/status",
	validate(goalStatusSchema),
	goalController.updateGoalStatus
);
router.delete("/:id", validate(goalIdParamSchema), goalController.deleteGoal);

export default router;
