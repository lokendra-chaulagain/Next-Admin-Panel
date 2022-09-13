import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    todayStatus: {
      type: [String],
      enum: ["present", "absent"],
      default: ["absent"],
    },

    createdAt1: { type: Date, default: Date.now },

    employeeName: {
      type: String,
      required: true,
    },

    employeeId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
