import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
	generateScheduleSchema,
	scheduleDateParamSchema,
} from "../validators/index.js";
import * as scheduleController from "../controllers/scheduleController.js";

const router = Router();

router.use(protect);
router.post(
	"/generate",
	validate(generateScheduleSchema),
	scheduleController.generateSchedule
);
router.get("/:date", validate(scheduleDateParamSchema), scheduleController.getSchedule);
router.patch(
	"/:date/adjust",
	validate(scheduleDateParamSchema),
	scheduleController.adjustSchedule
);

export default router;
