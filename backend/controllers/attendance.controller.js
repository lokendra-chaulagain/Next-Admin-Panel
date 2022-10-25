import Attendance from "../models/Attendance.js";

const takeEntryAttendance = async (req, res, next) => {
  try {
    const newAttendance = new Attendance(req.body);
    const savedAttendance = await newAttendance.save();
    res.status(200).json(savedAttendance);
  } catch (error) {
    console.log(error);
  }
};

const takeExitAttendance = async (req, res) => {
  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedAttendance);
  } catch (error) {
    console.log(error);
  }
};

// getAttendance bu userId

export { takeEntryAttendance, takeExitAttendance };
