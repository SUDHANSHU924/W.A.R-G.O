import * as aiService from "../services/aiService.js";
import { sendSuccess } from "../utils/responseHandler.js";

export const generatePlan = async (req, res, next) => {
	try {
		const plan = await aiService.generatePlan(req.validated.body);
		return sendSuccess(res, {
			status: 200,
			message: "AI plan generated",
			data: plan,
		});
	} catch (error) {
		return next(error);
	}
};
