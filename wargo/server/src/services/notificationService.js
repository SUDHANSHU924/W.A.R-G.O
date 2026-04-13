import Notification from "../models/Notification.js";
import Reminder from "../models/Reminder.js";
import logger from "../utils/logger.js";

export const createNotification = async ({
	userId,
	type,
	title,
	message,
	data,
	scheduledFor,
}) =>
	Notification.create({
		user: userId,
		type,
		title,
		message,
		data,
		scheduledFor,
	});

export const getNotifications = async (userId) =>
	Notification.find({ user: userId }).sort({ createdAt: -1 }).limit(50);

export const markRead = async (userId, notificationId) =>
	Notification.findOneAndUpdate(
		{ _id: notificationId, user: userId },
		{ read: true },
		{ new: true }
	);

export const sendReminder = async (reminder) => {
	try {
		await createNotification({
			userId: reminder.user,
			type: "reminder",
			title: "Reminder",
			message: reminder.message,
			data: { task: reminder.task, goal: reminder.goal },
			scheduledFor: reminder.scheduledFor,
		});

		await Reminder.findByIdAndUpdate(reminder._id, { status: "sent" });
	} catch (error) {
		logger.error("Failed to send reminder", error);
		await Reminder.findByIdAndUpdate(reminder._id, { status: "failed" });
	}
};
