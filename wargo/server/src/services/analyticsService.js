import Task from "../models/Task.js";
import Progress from "../models/Progress.js";
import Analytics from "../models/Analytics.js";

const getPeriodRange = (period) => {
  const now = new Date();
  const start = new Date(now);
  if (period === "monthly") {
    start.setDate(1);
  } else {
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);
  }
  start.setHours(0, 0, 0, 0);
  return { start, end: now };
};

export const getSummary = async (userId, period) => {
  const range = getPeriodRange(period);
  const tasks = await Task.find({
    user: userId,
    createdAt: { $gte: range.start, $lte: range.end },
  });

  const completed = tasks.filter((task) => task.status === "completed").length;
  const total = tasks.length;
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);

  const progress = await Progress.find({
    user: userId,
    createdAt: { $gte: range.start, $lte: range.end },
  });

  const focusMinutes = progress.reduce(
    (sum, entry) => sum + (entry.focusMinutes || 0),
    0
  );

  const summary = {
    period,
    totalTasks: total,
    completedTasks: completed,
    completionRate,
    focusMinutes,
  };

  await Analytics.findOneAndUpdate(
    { user: userId, period, startDate: range.start, endDate: range.end },
    { stats: summary },
    { upsert: true, new: true }
  );

  return summary;
};
