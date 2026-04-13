import mongoose from "mongoose";

const { Schema } = mongoose;

const TimeBlockSchema = new Schema(
	{
		task: { type: Schema.Types.ObjectId, ref: "Task" },
		title: { type: String, default: "" },
		start: { type: String, required: true },
		end: { type: String, required: true },
		status: {
			type: String,
			enum: ["scheduled", "completed", "missed"],
			default: "scheduled",
		},
		priority: { type: String, default: "medium" },
	},
	{ _id: false }
);

const ConflictSchema = new Schema(
	{
		message: { type: String },
		start: { type: String },
		end: { type: String },
	},
	{ _id: false }
);

const ScheduleSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		date: { type: String, required: true },
		blocks: { type: [TimeBlockSchema], default: [] },
		conflicts: { type: [ConflictSchema], default: [] },
		generatedBy: { type: String, default: "system" },
	},
	{ timestamps: true }
);

const Schedule = mongoose.model("Schedule", ScheduleSchema);

export default Schedule;
