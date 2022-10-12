import * as React from "react";
import { Grid } from "@mui/material";
import EmployeeProfileCard from "../@mui/EmployeeProfileCard";

export default function AllEmployeesWrapper() {
  return (
    <Grid className="mt-5 pt-5 d-flex flex-wrap justify-content-between">
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
