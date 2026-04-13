import * as analyticsService from "../services/analyticsService.js";
import { sendSuccess } from "../utils/responseHandler.js";

export const getSummary = async (req, res, next) => {
	try {
		const period = req.validated.query?.period || "weekly";
		const summary = await analyticsService.getSummary(req.user._id, period);
		return sendSuccess(res, {
			status: 200,
			message: "Analytics summary fetched",
			data: summary,
		});
	} catch (error) {
		return next(error);
	}
};
