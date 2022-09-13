import * as React from "react";
import { Grid } from "@mui/material";
import EmployeeProfileCard from "../@mui/EmployeeProfileCard";
import AttendancePunchCard from "../@mui/AttendancePunchCard";

export default function AllEmployeesWrapper() {
  return (
    <Grid container gap={5}>
       <AttendancePunchCard/>
      <EmployeeProfileCard />
      <EmployeeProfileCard />
      <EmployeeProfileCard />
      <EmployeeProfileCard />
      <EmployeeProfileCard />
      <EmployeeProfileCard />
      <EmployeeProfileCard />
      <EmployeeProfileCard />
      <EmployeeProfileCard />
     
    </Grid>
  );
}
