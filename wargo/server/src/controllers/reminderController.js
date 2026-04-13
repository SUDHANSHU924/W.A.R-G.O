import * as reminderService from "../services/reminderService.js";
import { sendSuccess } from "../utils/responseHandler.js";
import { AppError } from "../utils/appError.js";

export const createReminder = async (req, res, next) => {
  try {
    const reminder = await reminderService.createReminder(
      req.user._id,
      req.validated.body
    );
    return sendSuccess(res, {
      status: 201,
      message: "Reminder created",
      data: reminder,
    });
  } catch (error) {
    return next(error);
  }
};

export const getReminders = async (req, res, next) => {
  try {
    const reminders = await reminderService.getReminders(
      req.user._id,
      req.validated.query || {}
    );
    return sendSuccess(res, {
      status: 200,
      message: "Reminders fetched",
      data: reminders,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateReminderStatus = async (req, res, next) => {
  try {
    const reminder = await reminderService.updateReminderStatus(
      req.user._id,
      req.validated.params.id,
      req.validated.body.status
    );
    if (!reminder) {
      throw new AppError(404, "Reminder not found");
    }
    return sendSuccess(res, {
      status: 200,
      message: "Reminder updated",
      data: reminder,
    });
  } catch (error) {
    return next(error);
  }
};
