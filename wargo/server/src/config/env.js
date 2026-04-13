import dotenv from "dotenv";

dotenv.config();

export const env = {
	nodeEnv: process.env.NODE_ENV || "development",
	port: Number(process.env.PORT || 5000),
	mongoUri: process.env.MONGO_URI,
	jwtSecret: process.env.JWT_SECRET,
	jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
	clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
	groqApiKey: process.env.GROQ_API_KEY,
	groqModel: process.env.GROQ_MODEL || "llama3-70b-8192",
	rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 900000),
	rateLimitMax: Number(process.env.RATE_LIMIT_MAX || 300),
	reminderCron: process.env.REMINDER_CRON || "*/5 * * * *",
	scheduleCron: process.env.SCHEDULE_CRON || "0 3 * * *",
	timezone: process.env.TZ || "UTC",
	emailFrom: process.env.EMAIL_FROM || "no-reply@wargo.ai",
};
