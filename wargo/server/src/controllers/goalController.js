import * as goalService from "../services/goalService.js";
import { sendSuccess } from "../utils/responseHandler.js";
import { AppError } from "../utils/appError.js";

export const createGoal = async (req, res, next) => {
	try {
		const goal = await goalService.createGoal(req.user._id, req.validated.body);
		return sendSuccess(res, {
			status: 201,
			message: "Goal created",
			data: goal,
		});
	} catch (error) {
		return next(error);
	}
};

export const getGoals = async (req, res, next) => {
	try {
		const goals = await goalService.getGoals(
			req.user._id,
			req.validated.query || {}
		);
		return sendSuccess(res, {
			status: 200,
			message: "Goals fetched",
			data: goals,
		});
	} catch (error) {
		return next(error);
	}
};

export const getGoalById = async (req, res, next) => {
	try {
		const goal = await goalService.getGoalById(req.user._id, req.validated.params.id);
		if (!goal) {
			throw new AppError(404, "Goal not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Goal fetched",
			data: goal,
		});
	} catch (error) {
		return next(error);
	}
};

export const updateGoal = async (req, res, next) => {
	try {
		const goal = await goalService.updateGoal(
			req.user._id,
			req.validated.params.id,
			req.validated.body
		);
		if (!goal) {
			throw new AppError(404, "Goal not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Goal updated",
			data: goal,
		});
	} catch (error) {
		return next(error);
	}
};

export const updateGoalStatus = async (req, res, next) => {
	try {
		const goal = await goalService.updateGoal(
			req.user._id,
			req.validated.params.id,
			req.validated.body
		);
		if (!goal) {
			throw new AppError(404, "Goal not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Goal status updated",
			data: goal,
		});
	} catch (error) {
		return next(error);
	}
};

export const deleteGoal = async (req, res, next) => {
	try {
		const goal = await goalService.deleteGoal(req.user._id, req.validated.params.id);
		if (!goal) {
			throw new AppError(404, "Goal not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Goal deleted",
			data: goal,
		});
	} catch (error) {
		return next(error);
	}
};
