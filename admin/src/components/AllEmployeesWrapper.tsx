import * as React from "react";
import { Grid } from "@mui/material";
import EmployeeProfileCard from "../@mui/EmployeeProfileCard";

export default function AllEmployeesWrapper() {
  return (
    <Grid container gap={5}>
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
