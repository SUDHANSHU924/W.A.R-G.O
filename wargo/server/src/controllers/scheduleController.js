import * as schedulerService from "../services/schedulerService.js";
import { sendSuccess } from "../utils/responseHandler.js";

export const generateSchedule = async (req, res, next) => {
	try {
		const schedule = await schedulerService.generateSchedule(
			req.user._id,
			req.validated.body.date
		);
		return sendSuccess(res, {
			status: 200,
			message: "Schedule generated",
			data: schedule,
		});
	} catch (error) {
		return next(error);
	}
};

export const getSchedule = async (req, res, next) => {
	try {
		const schedule = await schedulerService.getSchedule(
			req.user._id,
			req.validated.params.date
		);
		return sendSuccess(res, {
			status: 200,
			message: "Schedule fetched",
			data: schedule,
		});
	} catch (error) {
		return next(error);
	}
};

export const adjustSchedule = async (req, res, next) => {
	try {
		const schedule = await schedulerService.adjustSchedule(
			req.user._id,
			req.validated.params.date
		);
		return sendSuccess(res, {
			status: 200,
			message: "Schedule adjusted",
			data: schedule,
		});
	} catch (error) {
		return next(error);
	}
};
