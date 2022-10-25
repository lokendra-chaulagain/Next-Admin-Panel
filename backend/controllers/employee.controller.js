import Employee from "../models/Employee.js";

const addEmployee = async (req, res, next) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (error) {
    console.log(error);
  }
};


const getAllEmployee = async (req, res, next) => {
  try {
    const allEmployee = await Employee.find();
    res.status(200).json(allEmployee);
  } catch (error) {
    console.log(error);
  }
};

export { addEmployee, getAllEmployee };
