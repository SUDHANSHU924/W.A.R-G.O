import cron from "node-cron";
import { env } from "../config/env.js";
import { autoAdjustMissedTasks } from "../services/schedulerService.js";
import logger from "../utils/logger.js";

export const startScheduleUpdateJob = () => {
	cron.schedule(env.scheduleCron, async () => {
		try {
			await autoAdjustMissedTasks();
		} catch (error) {
			logger.error("Schedule update job failed", error);
		}
	});

	logger.info("Schedule update job scheduled");
};
