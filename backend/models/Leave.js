import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
     
    },

    reason: {
      type: String,
    },

    message: {
      type: String,
    },

    duration: {
      type: String,
    },

    leaveDay: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Leave", leaveSchema);
