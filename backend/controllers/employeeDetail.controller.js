import EmployeeDetail from "../models/EmployeeDetail.js";

//add
const addEmployeeDetail = async (req, res, next) => {
  try {
    const newEmployeeDetail = new EmployeeDetail(req.body);
    const savedEmployeeDetail = await newEmployeeDetail.save();
    res.status(200).json(savedEmployeeDetail);
  } catch (error) {
    console.log(error);
  }
};

//get
const getAllEmployeeDetail = async (req, res, next) => {
  try {
    const allEmployeeDetail = await EmployeeDetail.find();
    res.status(200).json(allEmployeeDetail);
  } catch (error) {
    console.log(error);
  }
};

export { addEmployeeDetail, getAllEmployeeDetail };
