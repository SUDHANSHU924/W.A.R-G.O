import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		name: { type: String, required: true, trim: true },
		email: { type: String, required: true, unique: true, lowercase: true },
		password: { type: String, required: true, minlength: 8 },
		role: { type: String, enum: ["user", "admin"], default: "user" },
		timezone: { type: String, default: "UTC" },
		avatarUrl: { type: String, default: "" },
		workingHours: {
			start: { type: String, default: "09:00" },
			end: { type: String, default: "17:00" },
		},
		preferences: {
			theme: { type: String, default: "dark" },
			weekStart: { type: String, default: "monday" },
			focusMode: { type: Boolean, default: true },
			dailyGoalMinutes: { type: Number, default: 120 },
		},
		notificationSettings: {
			email: { type: Boolean, default: true },
			push: { type: Boolean, default: true },
			dailySummary: { type: Boolean, default: true },
			missedTask: { type: Boolean, default: true },
		},
		streak: {
			current: { type: Number, default: 0 },
			longest: { type: Number, default: 0 },
			lastActive: { type: Date },
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function hashPassword(next) {
	if (!this.isModified("password")) {
		return next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	return next();
});

UserSchema.methods.comparePassword = function comparePassword(candidate) {
	return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model("User", UserSchema);

export default User;
