import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllEmployee } from "../../../redux/employee/employeeActions";
import EmployeeTable from "../../components/employee/EmployeeTable";
import { Grid } from "@mui/material";
import EmployeeProfileCard from "../../components/employee/EmployeeProfileCard";

function Employee() {
  const dispatch = useAppDispatch();
  const { employee } = useAppSelector((state: any) => state.employeeStore);

  React.useEffect(() => {
    dispatch(fetchAllEmployee());
  }, [dispatch]);

  return (
    <div>
      <EmployeeTable employee={employee} />
      <Grid className="mt-5 pt-5 d-flex flex-wrap justify-content-between">
        <EmployeeProfileCard />
        <EmployeeProfileCard />
        <EmployeeProfileCard />
        <EmployeeProfileCard />
        <EmployeeProfileCard />
      </Grid>
    </div>
  );
}

export default Employee;
