import mongoose from "mongoose";

const employeeDetailSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "true",
  },

  profileImg: {
    type: String,
    required: true,
  },

  empId: {
    type: String,
    required: "true",
  },

  position: {
    type: String,
    required: "true",
  },

  age: {
    type: String,
    required: "true",
  },

  contact: {
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

  daysAtCompany: {
    type: String,
    required: "true",
  },

  description: {
    type: String,
    required: "true",
  },
});

export default mongoose.model("EmployeeDetail", employeeDetailSchema);
