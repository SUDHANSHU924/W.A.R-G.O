import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
	createTaskSchema,
	updateTaskSchema,
	taskIdParamSchema,
	rescheduleTaskSchema,
	taskQuerySchema,
} from "../validators/index.js";
import * as taskController from "../controllers/taskController.js";

const router = Router();

router.use(protect);
router.post("/", validate(createTaskSchema), taskController.createTask);
router.get("/", validate(taskQuerySchema), taskController.getTasks);
router.patch("/:id", validate(updateTaskSchema), taskController.updateTask);
router.patch("/:id/complete", validate(taskIdParamSchema), taskController.markTaskComplete);
router.patch("/:id/skip", validate(taskIdParamSchema), taskController.skipTask);
router.patch("/:id/reschedule", validate(rescheduleTaskSchema), taskController.rescheduleTask);

export default router;
