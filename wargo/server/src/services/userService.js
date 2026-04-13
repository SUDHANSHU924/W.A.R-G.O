import User from "../models/User.js";
import Settings from "../models/Settings.js";

export const getProfile = async (userId) =>
  User.findById(userId).select("-password");

export const updateProfile = async (userId, updates) =>
  User.findByIdAndUpdate(userId, updates, {
    new: true,
    runValidators: true,
  }).select("-password");

export const updateWorkingHours = async (userId, workingHours) =>
  User.findByIdAndUpdate(
    userId,
    { workingHours },
    { new: true, runValidators: true }
  ).select("-password");

export const updatePreferences = async (userId, preferences) => {
  const update = Object.entries(preferences).reduce((acc, [key, value]) => {
    acc[`preferences.${key}`] = value;
    return acc;
  }, {});

  return User.findByIdAndUpdate(
    userId,
    { $set: update },
    { new: true, runValidators: true }
  ).select("-password");
};

export const updateNotificationSettings = async (userId, notificationSettings) => {
  const update = Object.entries(notificationSettings).reduce((acc, [key, value]) => {
    acc[`notificationSettings.${key}`] = value;
    return acc;
  }, {});

  return User.findByIdAndUpdate(
    userId,
    { $set: update },
    { new: true, runValidators: true }
  ).select("-password");
};

export const getSettings = async (userId) => {
  let settings = await Settings.findOne({ user: userId });
  if (!settings) {
    settings = await Settings.create({ user: userId });
  }
  return settings;
};

export const updateSettings = async (userId, updates) => {
  const settings = await getSettings(userId);
  Object.assign(settings, updates);
  await settings.save();
  return settings;
};
