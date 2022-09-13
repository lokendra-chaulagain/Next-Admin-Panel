import Attendance from "../models/Attendance.js";

//add
const addAttendanceStatus = async (req, res, next) => {
  try {
    const attendanceStatus = new Attendance(req.body);
    const savedAttendanceStatus = await attendanceStatus.save();
    res.status(200).json(savedAttendanceStatus);
  } catch (error) {
    console.log(error);
  }
};

//get
const getAllEmployeeAttendance = async (req, res, next) => {
  try {
    const allEmployeeAttendance = await Attendance.find();
    res.status(200).json(allEmployeeAttendance);
  } catch (error) {
    console.log(error);
  }
};

export { addAttendanceStatus,getAllEmployeeAttendance };
