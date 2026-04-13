import mongoose from "mongoose";

const { Schema } = mongoose;

const NotificationSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		type: { type: String, default: "system" },
		title: { type: String, required: true },
		message: { type: String, required: true },
		data: { type: Schema.Types.Mixed, default: {} },
		scheduledFor: { type: Date },
		read: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
