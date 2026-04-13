import * as userService from "../services/userService.js";
import { sendSuccess } from "../utils/responseHandler.js";

export const getProfile = async (req, res, next) => {
	try {
		const user = await userService.getProfile(req.user._id);
		return sendSuccess(res, {
			status: 200,
			message: "Profile fetched",
			data: user,
		});
	} catch (error) {
		return next(error);
	}
};

export const updateProfile = async (req, res, next) => {
	try {
		const user = await userService.updateProfile(req.user._id, req.validated.body);
		return sendSuccess(res, {
			status: 200,
			message: "Profile updated",
			data: user,
		});
	} catch (error) {
		return next(error);
	}
};

export const updateWorkingHours = async (req, res, next) => {
	try {
		const user = await userService.updateWorkingHours(
			req.user._id,
			req.validated.body
		);
		return sendSuccess(res, {
			status: 200,
			message: "Working hours updated",
			data: user,
		});
	} catch (error) {
		return next(error);
	}
};

export const updatePreferences = async (req, res, next) => {
	try {
		const user = await userService.updatePreferences(
			req.user._id,
			req.validated.body
		);
		return sendSuccess(res, {
			status: 200,
			message: "Preferences updated",
			data: user,
		});
	} catch (error) {
		return next(error);
	}
};

export const updateNotificationSettings = async (req, res, next) => {
	try {
		const user = await userService.updateNotificationSettings(
			req.user._id,
			req.validated.body
		);
		return sendSuccess(res, {
			status: 200,
			message: "Notification settings updated",
			data: user,
		});
	} catch (error) {
		return next(error);
	}
};

export const getSettings = async (req, res, next) => {
	try {
		const settings = await userService.getSettings(req.user._id);
		return sendSuccess(res, {
			status: 200,
			message: "Settings fetched",
			data: settings,
		});
	} catch (error) {
		return next(error);
	}
};

export const updateSettings = async (req, res, next) => {
	try {
		const settings = await userService.updateSettings(
			req.user._id,
			req.validated.body
		);
		return sendSuccess(res, {
			status: 200,
			message: "Settings updated",
			data: settings,
		});
	} catch (error) {
		return next(error);
	}
};
