import Reminder from "../models/Reminder.js";

export const createReminder = async (userId, payload) => {
  const { taskId, goalId, scheduledFor, ...reminderPayload } = payload;
  return Reminder.create({
    ...reminderPayload,
    user: userId,
    task: taskId || null,
    goal: goalId || null,
    scheduledFor: new Date(scheduledFor),
  });
};

export const getReminders = async (userId, filters) => {
  const query = { user: userId };
  if (filters.date) {
    const start = new Date(`${filters.date}T00:00:00.000Z`);
    const end = new Date(`${filters.date}T23:59:59.999Z`);
    query.scheduledFor = { $gte: start, $lte: end };
  }
  if (filters.status) {
    query.status = filters.status;
  }
  return Reminder.find(query).sort({ scheduledFor: 1 });
};

export const updateReminderStatus = async (userId, reminderId, status) =>
  Reminder.findOneAndUpdate(
    { _id: reminderId, user: userId },
    { status },
    { new: true }
  );
