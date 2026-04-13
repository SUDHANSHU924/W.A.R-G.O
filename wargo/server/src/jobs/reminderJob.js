import cron from "node-cron";
import { env } from "../config/env.js";
import Reminder from "../models/Reminder.js";
import { sendReminder } from "../services/notificationService.js";
import logger from "../utils/logger.js";

export const startReminderJob = () => {
	cron.schedule(env.reminderCron, async () => {
		try {
			const dueReminders = await Reminder.find({
				status: "pending",
				scheduledFor: { $lte: new Date() },
			}).limit(50);

			if (!dueReminders.length) {
				return;
			}

			for (const reminder of dueReminders) {
				await sendReminder(reminder);
			}
		} catch (error) {
			logger.error("Reminder job failed", error);
		}
	});

	logger.info("Reminder job scheduled");
};
