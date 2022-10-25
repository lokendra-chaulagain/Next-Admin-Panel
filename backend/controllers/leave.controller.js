import Leave from "../models/Leave.js";

const takeLeave = async (req, res, next) => {
  try {
    const newLeave = new Leave(req.body);
    const savedLeave = await newLeave.save();
    res.status(200).json(savedLeave);
  } catch (error) {
    console.log(error);
  }
};

export { takeLeave };
