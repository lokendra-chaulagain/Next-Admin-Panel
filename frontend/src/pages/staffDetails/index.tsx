import React, { useEffect, useState } from "react";
import StaffDetailsGridTable from "../../@mui/StaffDetailsGridTable";
import AllEmployeesWrapper from "../../components/AllEmployeesWrapper";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllEmployeesDetail } from "../../../redux/employeesDetail/employeesDetailSlice";
import axios from "axios";

function StaffDetails() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get("http://localhost:4000/api/employeeDetail/getAll");
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state: any) => state.employeesDetail);

  React.useEffect(() => {
    dispatch(fetchAllEmployeesDetail());
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <StaffDetailsGridTable />
      <AllEmployeesWrapper />
    </div>
  );
}

export default StaffDetails;
