import * as authService from "../services/authService.js";
import { sendSuccess } from "../utils/responseHandler.js";

export const signup = async (req, res, next) => {
	try {
		const result = await authService.signup(req.validated.body);
		return sendSuccess(res, {
			status: 201,
			message: "Signup successful",
			data: result,
		});
	} catch (error) {
		return next(error);
	}
};

export const login = async (req, res, next) => {
	try {
		const result = await authService.login(req.validated.body);
		return sendSuccess(res, {
			status: 200,
			message: "Login successful",
			data: result,
		});
	} catch (error) {
		return next(error);
	}
};

export const logout = async (req, res) =>
	sendSuccess(res, {
		status: 200,
		message: "Logout successful",
		data: { ok: true },
	});

export const getMe = async (req, res) =>
	sendSuccess(res, {
		status: 200,
		message: "Profile fetched",
		data: req.user,
	});
