import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { notificationMarkReadSchema } from "../validators/index.js";
import * as notificationController from "../controllers/notificationController.js";

const router = Router();

router.use(protect);
router.get("/", notificationController.getNotifications);
router.patch(
  "/:id/read",
  validate(notificationMarkReadSchema),
  notificationController.markNotificationRead
);

export default router;
