import Schedule from "../models/Schedule.js";
import Task from "../models/Task.js";
import User from "../models/User.js";
import { AppError } from "../utils/appError.js";
import * as calendarService from "./calendarService.js";

const priorityRank = { high: 3, medium: 2, low: 1 };

const addMinutes = (time, minutes) => {
	const [hours, mins] = time.split(":").map(Number);
	const total = hours * 60 + mins + minutes;
	const nextHours = String(Math.floor(total / 60)).padStart(2, "0");
	const nextMins = String(total % 60).padStart(2, "0");
	return `${nextHours}:${nextMins}`;
};

const sortTasks = (tasks) =>
	tasks.sort(
		(a, b) => priorityRank[b.priority] - priorityRank[a.priority]
	);

export const generateSchedule = async (userId, date) => {
	const user = await User.findById(userId);
	if (!user) {
		throw new AppError(404, "User not found");
	}

	const tasks = await Task.find({
		user: userId,
		scheduledDate: date,
		status: { $in: ["pending", "active"] },
	});

	sortTasks(tasks);

	let currentTime = user.workingHours?.start || "09:00";
	const blocks = tasks.map((task) => {
		const duration = task.durationMinutes || 60;
		const start = currentTime;
		const end = addMinutes(currentTime, duration);
		currentTime = end;
		return {
			task: task._id,
			title: task.title,
			start,
			end,
			status: "scheduled",
			priority: task.priority,
		};
	});

	const conflicts = await calendarService.checkConflicts(userId, date, blocks);

	return Schedule.findOneAndUpdate(
		{ user: userId, date },
		{ user: userId, date, blocks, conflicts, generatedBy: "system" },
		{ upsert: true, new: true }
	);
};

export const getSchedule = async (userId, date) =>
	Schedule.findOne({ user: userId, date }).populate("blocks.task");

export const adjustSchedule = async (userId, date) => {
	const schedule = await getSchedule(userId, date);
	if (!schedule) {
		return generateSchedule(userId, date);
	}

	return schedule;
};

export const autoAdjustMissedTasks = async () => {
	const today = new Date().toISOString().slice(0, 10);
	const tasks = await Task.find({
		status: "pending",
		scheduledDate: { $ne: "", $lt: today },
	}).limit(100);

	await Promise.all(
		tasks.map((task) => {
			task.scheduledDate = today;
			return task.save();
		})
	);
};
