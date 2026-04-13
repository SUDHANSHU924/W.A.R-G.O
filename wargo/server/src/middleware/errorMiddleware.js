import logger from "../utils/logger.js";
import { AppError } from "../utils/appError.js";

export const notFound = (req, res, next) =>
	next(new AppError(404, `Route ${req.originalUrl} not found`));

export const errorHandler = (err, req, res, next) => {
	const status = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	const details = err.details || null;

	logger.error(message, details);
	res.status(status).json({ success: false, message, details });
};
