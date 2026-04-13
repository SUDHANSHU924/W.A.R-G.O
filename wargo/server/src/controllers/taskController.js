import * as taskService from "../services/taskService.js";
import { sendSuccess } from "../utils/responseHandler.js";
import { AppError } from "../utils/appError.js";

export const createTask = async (req, res, next) => {
	try {
		const task = await taskService.createTask(req.user._id, req.validated.body);
		return sendSuccess(res, {
			status: 201,
			message: "Task created",
			data: task,
		});
	} catch (error) {
		return next(error);
	}
};

export const getTasks = async (req, res, next) => {
	try {
		const tasks = await taskService.getTasks(
			req.user._id,
			req.validated.query || {}
		);
		return sendSuccess(res, {
			status: 200,
			message: "Tasks fetched",
			data: tasks,
		});
	} catch (error) {
		return next(error);
	}
};

export const updateTask = async (req, res, next) => {
	try {
		const task = await taskService.updateTask(
			req.user._id,
			req.validated.params.id,
			req.validated.body
		);
		if (!task) {
			throw new AppError(404, "Task not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Task updated",
			data: task,
		});
	} catch (error) {
		return next(error);
	}
};

export const markTaskComplete = async (req, res, next) => {
	try {
		const task = await taskService.markTaskStatus(
			req.user._id,
			req.validated.params.id,
			"completed"
		);
		if (!task) {
			throw new AppError(404, "Task not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Task completed",
			data: task,
		});
	} catch (error) {
		return next(error);
	}
};

export const skipTask = async (req, res, next) => {
	try {
		const task = await taskService.markTaskStatus(
			req.user._id,
			req.validated.params.id,
			"skipped"
		);
		if (!task) {
			throw new AppError(404, "Task not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Task skipped",
			data: task,
		});
	} catch (error) {
		return next(error);
	}
};

export const rescheduleTask = async (req, res, next) => {
	try {
		const task = await taskService.rescheduleTask(
			req.user._id,
			req.validated.params.id,
			req.validated.body
		);
		if (!task) {
			throw new AppError(404, "Task not found");
		}
		return sendSuccess(res, {
			status: 200,
			message: "Task rescheduled",
			data: task,
		});
	} catch (error) {
		return next(error);
	}
};
