import * as notificationService from "../services/notificationService.js";
import { sendSuccess } from "../utils/responseHandler.js";
import { AppError } from "../utils/appError.js";

export const getNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationService.getNotifications(req.user._id);
    return sendSuccess(res, {
      status: 200,
      message: "Notifications fetched",
      data: notifications,
    });
  } catch (error) {
    return next(error);
  }
};

export const markNotificationRead = async (req, res, next) => {
  try {
    const notification = await notificationService.markRead(
      req.user._id,
      req.validated.params.id
    );
    if (!notification) {
      throw new AppError(404, "Notification not found");
    }
    return sendSuccess(res, {
      status: 200,
      message: "Notification updated",
      data: notification,
    });
  } catch (error) {
    return next(error);
  }
};
