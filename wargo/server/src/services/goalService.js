import Goal from "../models/Goal.js";

export const createGoal = async (userId, payload) =>
  Goal.create({ ...payload, user: userId });

export const getGoals = async (userId, filters = {}) => {
  const query = { user: userId };
  if (filters.status) {
    query.status = filters.status;
  }
  if (filters.priority) {
    query.priority = filters.priority;
  }
  if (filters.category) {
    query.category = filters.category;
  }
  return Goal.find(query).sort({ createdAt: -1 });
};

export const getGoalById = async (userId, goalId) =>
  Goal.findOne({ _id: goalId, user: userId });

export const updateGoal = async (userId, goalId, payload) =>
  Goal.findOneAndUpdate({ _id: goalId, user: userId }, payload, {
    new: true,
    runValidators: true,
  });

export const deleteGoal = async (userId, goalId) =>
  Goal.findOneAndDelete({ _id: goalId, user: userId });
