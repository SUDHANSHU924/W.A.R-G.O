import Task from "../models/Task.js";

export const createTask = async (userId, payload) => {
  const { goalId, ...taskPayload } = payload;
  return Task.create({
    ...taskPayload,
    user: userId,
    goal: goalId || null,
  });
};

export const getTasks = async (userId, filters) => {
  const query = { user: userId };
  if (filters.goalId) {
    query.goal = filters.goalId;
  }
  if (filters.date) {
    query.scheduledDate = filters.date;
  }
  if (filters.status) {
    query.status = filters.status;
  }
  return Task.find(query).sort({ scheduledDate: 1, startTime: 1 });
};

export const getTaskById = async (userId, taskId) =>
  Task.findOne({ _id: taskId, user: userId });

export const updateTask = async (userId, taskId, payload) => {
  const { goalId, ...taskPayload } = payload;
  if (goalId) {
    taskPayload.goal = goalId;
  }

  return Task.findOneAndUpdate({ _id: taskId, user: userId }, taskPayload, {
    new: true,
    runValidators: true,
  });
};

export const markTaskStatus = async (userId, taskId, status) =>
  Task.findOneAndUpdate(
    { _id: taskId, user: userId },
    {
      status,
      ...(status === "completed" ? { completedAt: new Date() } : {}),
      ...(status === "skipped" ? { skippedAt: new Date() } : {}),
    },
    { new: true }
  );

export const rescheduleTask = async (userId, taskId, payload) =>
  Task.findOneAndUpdate(
    { _id: taskId, user: userId },
    { ...payload, status: "pending" },
    { new: true }
  );
