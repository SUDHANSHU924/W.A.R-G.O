import mongoose from "mongoose";

const { Schema } = mongoose;

const ProgressSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		date: { type: String, required: true },
		completionRate: { type: Number, default: 0 },
		tasksCompleted: { type: Number, default: 0 },
		tasksTotal: { type: Number, default: 0 },
		focusMinutes: { type: Number, default: 0 },
		streakCount: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

const Progress = mongoose.model("Progress", ProgressSchema);

export default Progress;
