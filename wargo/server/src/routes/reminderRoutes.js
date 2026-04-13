import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
  createReminderSchema,
  reminderQuerySchema,
  updateReminderSchema,
} from "../validators/index.js";
import * as reminderController from "../controllers/reminderController.js";

const router = Router();

router.use(protect);
router.post("/", validate(createReminderSchema), reminderController.createReminder);
router.get("/", validate(reminderQuerySchema), reminderController.getReminders);
router.patch(
  "/:id/status",
  validate(updateReminderSchema),
  reminderController.updateReminderStatus
);

export default router;
