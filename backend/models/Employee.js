import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "true",
  },

  profilePicture: {
    type: String,
    required: true,
  },

  position: {
    type: String,
    required: "true",
  },

  contactNumber: {
    type: String,
    required: "true",
  },

  email: {
    type: String,
    required: "true",
  },

  joinDate: {
    type: String,
    required: "true",
  },
});

export default mongoose.model("Employee", EmployeeSchema);
