import mongoose from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		goal: { type: Schema.Types.ObjectId, ref: "Goal" },
		title: { type: String, required: true },
		description: { type: String, default: "" },
		status: {
			type: String,
			enum: ["pending", "active", "completed", "skipped"],
			default: "pending",
		},
		priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
		scheduledDate: { type: String, default: "" },
		startTime: { type: String, default: "" },
		endTime: { type: String, default: "" },
		durationMinutes: { type: Number, default: 60 },
		order: { type: Number, default: 0 },
		isRecurring: { type: Boolean, default: false },
		recurrenceRule: { type: String, default: "" },
		tags: { type: [String], default: [] },
		completedAt: { type: Date },
		skippedAt: { type: Date },
	},
	{ timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
