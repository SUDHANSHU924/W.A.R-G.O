import mongoose from "mongoose";
import { env } from "./env.js";
import logger from "../utils/logger.js";

export const connectDB = async () => {
	if (!env.mongoUri) {
		throw new Error("MONGO_URI is not set");
	}

	mongoose.set("strictQuery", true);
	try {
		await mongoose.connect(env.mongoUri);
		logger.info("MongoDB connected");
	} catch (error) {
		logger.error("MongoDB connection failed", error);
		throw error;
	}
};
