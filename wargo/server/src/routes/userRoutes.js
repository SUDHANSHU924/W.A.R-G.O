import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
	updateProfileSchema,
	updateWorkingHoursSchema,
	updatePreferencesSchema,
	updateNotificationSettingsSchema,
	updateSettingsSchema,
} from "../validators/index.js";
import * as userController from "../controllers/userController.js";

const router = Router();

router.use(protect);
router.get("/me", userController.getProfile);
router.patch("/me", validate(updateProfileSchema), userController.updateProfile);
router.patch(
	"/me/working-hours",
	validate(updateWorkingHoursSchema),
	userController.updateWorkingHours
);
router.patch(
	"/me/preferences",
	validate(updatePreferencesSchema),
	userController.updatePreferences
);
router.patch(
	"/me/notifications",
	validate(updateNotificationSettingsSchema),
	userController.updateNotificationSettings
);
router.get("/me/settings", userController.getSettings);
router.patch("/me/settings", validate(updateSettingsSchema), userController.updateSettings);

export default router;
