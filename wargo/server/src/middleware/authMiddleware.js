import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import User from "../models/User.js";
import { AppError } from "../utils/appError.js";

export const protect = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			throw new AppError(401, "Not authorized");
		}

		const token = authHeader.split(" ")[1];
		if (!env.jwtSecret) {
			throw new AppError(500, "JWT_SECRET is not configured");
		}
		const decoded = jwt.verify(token, env.jwtSecret);
		const user = await User.findById(decoded.id).select("-password");

		if (!user) {
			throw new AppError(401, "User not found");
		}

		req.user = user;
		return next();
	} catch (error) {
		if (error instanceof AppError) {
			return next(error);
		}
		return next(new AppError(401, "Invalid token"));
	}
};
