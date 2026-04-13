import mongoose from "mongoose";

const { Schema } = mongoose;

const GoalSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		title: { type: String, required: true },
		description: { type: String, default: "" },
		deadline: { type: String, default: "" },
		priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
		category: { type: String, default: "general" },
		status: { type: String, enum: ["active", "paused", "completed"], default: "active" },
		progress: { type: Number, default: 0 },
		aiPlan: { type: Schema.Types.Mixed, default: {} },
	},
	{ timestamps: true }
);

const Goal = mongoose.model("Goal", GoalSchema);

export default Goal;
