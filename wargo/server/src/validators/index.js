import { z } from "zod";

const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/);
const dateString = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const timeString = z.string().regex(/^\d{2}:\d{2}$/);

export const signupSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
});

export const updateProfileSchema = z.object({
  body: z
    .object({
      name: z.string().min(2).optional(),
      timezone: z.string().optional(),
      avatarUrl: z.string().url().optional(),
    })
    .strict(),
});

export const updateWorkingHoursSchema = z.object({
  body: z
    .object({
      start: timeString,
      end: timeString,
    })
    .strict(),
});

export const updatePreferencesSchema = z.object({
  body: z
    .object({
      theme: z.enum(["dark", "light"]).optional(),
      weekStart: z.enum(["monday", "sunday"]).optional(),
      focusMode: z.boolean().optional(),
      dailyGoalMinutes: z.number().int().min(0).optional(),
    })
    .strict(),
});

export const updateNotificationSettingsSchema = z.object({
  body: z
    .object({
      email: z.boolean().optional(),
      push: z.boolean().optional(),
      dailySummary: z.boolean().optional(),
      missedTask: z.boolean().optional(),
    })
    .strict(),
});

export const updateSettingsSchema = z.object({
  body: z
    .object({
      theme: z.enum(["dark", "light"]).optional(),
      calendarIntegration: z
        .object({
          provider: z.string().optional(),
          enabled: z.boolean().optional(),
        })
        .optional(),
      ai: z
        .object({
          tone: z.enum(["neutral", "directive", "supportive"]).optional(),
          autoSchedule: z.boolean().optional(),
        })
        .optional(),
    })
    .strict(),
});

export const goalIdParamSchema = z.object({
  params: z.object({
    id: objectId,
  }),
});

export const createGoalSchema = z.object({
  body: z
    .object({
      title: z.string().min(2),
      description: z.string().optional(),
      deadline: dateString.optional(),
      priority: z.enum(["low", "medium", "high"]).optional(),
      category: z.string().optional(),
    })
    .strict(),
});

export const goalQuerySchema = z.object({
  query: z
    .object({
      status: z.enum(["active", "paused", "completed"]).optional(),
      priority: z.enum(["low", "medium", "high"]).optional(),
      category: z.string().optional(),
    })
    .strict(),
});

export const updateGoalSchema = z.object({
  params: z.object({
    id: objectId,
  }),
  body: z
    .object({
      title: z.string().min(2).optional(),
      description: z.string().optional(),
      deadline: dateString.optional(),
      priority: z.enum(["low", "medium", "high"]).optional(),
      category: z.string().optional(),
      status: z.enum(["active", "paused", "completed"]).optional(),
      progress: z.number().min(0).max(100).optional(),
    })
    .strict(),
});

export const goalStatusSchema = z.object({
  params: z.object({
    id: objectId,
  }),
  body: z
    .object({
      status: z.enum(["active", "paused", "completed"]).optional(),
      progress: z.number().min(0).max(100).optional(),
    })
    .strict(),
});

export const taskIdParamSchema = z.object({
  params: z.object({
    id: objectId,
  }),
});

export const createTaskSchema = z.object({
  body: z
    .object({
      title: z.string().min(2),
      description: z.string().optional(),
      goalId: objectId.optional(),
      scheduledDate: dateString.optional(),
      startTime: timeString.optional(),
      endTime: timeString.optional(),
      durationMinutes: z.number().int().min(5).optional(),
      priority: z.enum(["low", "medium", "high"]).optional(),
      isRecurring: z.boolean().optional(),
      recurrenceRule: z.string().optional(),
      tags: z.array(z.string()).optional(),
    })
    .strict(),
});

export const updateTaskSchema = z.object({
  params: z.object({
    id: objectId,
  }),
  body: z
    .object({
      title: z.string().min(2).optional(),
      description: z.string().optional(),
      goalId: objectId.optional(),
      scheduledDate: dateString.optional(),
      startTime: timeString.optional(),
      endTime: timeString.optional(),
      durationMinutes: z.number().int().min(5).optional(),
      status: z.enum(["pending", "active", "completed", "skipped"]).optional(),
      priority: z.enum(["low", "medium", "high"]).optional(),
      isRecurring: z.boolean().optional(),
      recurrenceRule: z.string().optional(),
      tags: z.array(z.string()).optional(),
    })
    .strict(),
});

export const taskQuerySchema = z.object({
  query: z
    .object({
      date: dateString.optional(),
      goalId: objectId.optional(),
      status: z.enum(["pending", "active", "completed", "skipped"]).optional(),
    })
    .strict(),
});

export const rescheduleTaskSchema = z.object({
  params: z.object({
    id: objectId,
  }),
  body: z
    .object({
      scheduledDate: dateString,
      startTime: timeString.optional(),
      endTime: timeString.optional(),
    })
    .strict(),
});

export const scheduleDateParamSchema = z.object({
  params: z.object({
    date: dateString,
  }),
});

export const generateScheduleSchema = z.object({
  body: z
    .object({
      date: dateString,
      timezone: z.string().optional(),
    })
    .strict(),
});

export const createReminderSchema = z.object({
  body: z
    .object({
      taskId: objectId.optional(),
      goalId: objectId.optional(),
      message: z.string().min(3),
      channel: z.enum(["push", "email"]).optional(),
      scheduledFor: z.string().min(1),
    })
    .strict(),
});

export const updateReminderSchema = z.object({
  params: z.object({
    id: objectId,
  }),
  body: z
    .object({
      status: z.enum(["pending", "sent", "failed"]),
    })
    .strict(),
});

export const reminderQuerySchema = z.object({
  query: z
    .object({
      date: dateString.optional(),
      status: z.enum(["pending", "sent", "failed"]).optional(),
    })
    .strict(),
});

export const aiPlanSchema = z.object({
  body: z
    .object({
      goalTitle: z.string().min(2),
      deadline: dateString.optional(),
      availableTimePerDay: z.number().min(0.5).max(24),
      priority: z.enum(["low", "medium", "high"]),
      context: z.string().optional(),
    })
    .strict(),
});

export const analyticsSummarySchema = z.object({
  query: z
    .object({
      period: z.enum(["weekly", "monthly"]).optional(),
    })
    .strict(),
});

export const notificationMarkReadSchema = z.object({
  params: z.object({
    id: objectId,
  }),
});
