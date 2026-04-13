import mongoose from "mongoose";

const { Schema } = mongoose;

const AnalyticsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    period: { type: String, enum: ["weekly", "monthly"], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    stats: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

const Analytics = mongoose.model("Analytics", AnalyticsSchema);

export default Analytics;
