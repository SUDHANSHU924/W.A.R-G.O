import mongoose from "mongoose";

const { Schema } = mongoose;

const ReminderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    task: { type: Schema.Types.ObjectId, ref: "Task" },
    goal: { type: Schema.Types.ObjectId, ref: "Goal" },
    channel: { type: String, enum: ["push", "email"], default: "push" },
    message: { type: String, required: true },
    scheduledFor: { type: Date, required: true },
    status: { type: String, enum: ["pending", "sent", "failed"], default: "pending" },
  },
  { timestamps: true }
);

const Reminder = mongoose.model("Reminder", ReminderSchema);

export default Reminder;
