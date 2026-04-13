import mongoose from "mongoose";

const { Schema } = mongoose;

const SettingsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    theme: { type: String, default: "dark" },
    calendarIntegration: {
      provider: { type: String, default: "" },
      enabled: { type: Boolean, default: false },
      accessToken: { type: String, default: "" },
      refreshToken: { type: String, default: "" },
    },
    ai: {
      tone: { type: String, default: "neutral" },
      autoSchedule: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

const Settings = mongoose.model("Settings", SettingsSchema);

export default Settings;
