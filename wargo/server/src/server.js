import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import logger from "./utils/logger.js";
import { startReminderJob } from "./jobs/reminderJob.js";
import { startScheduleUpdateJob } from "./jobs/scheduleUpdateJob.js";

const startServer = async () => {
	await connectDB();

	app.listen(env.port, () => {
		logger.info(`WARGO API running on port ${env.port}`);
	});

	startReminderJob();
	startScheduleUpdateJob();
};

startServer().catch((error) => {
	logger.error("Failed to start server", error);
	process.exit(1);
});
