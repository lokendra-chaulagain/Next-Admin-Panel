import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      default: "12345",
    },

    officeEnteredTime: {
      type: String,
    },

    officeExitedTime: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
