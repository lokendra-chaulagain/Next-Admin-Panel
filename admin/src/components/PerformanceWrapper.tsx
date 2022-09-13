import React from "react";
import AttendanceCard from "../@mui/AttendanceCard";
import PerformanceGridTable from "../@mui/PerformanceGridTable";
import { Grid } from "@mui/material";

const PerformanceWrapper = () => {
  return (
    <div>
      <PerformanceGridTable />

      <Grid container spacing={4}>
        <Grid item sm={4}>
          <AttendanceCard />
        </Grid>
        <Grid item sm={4}>
          <AttendanceCard />
        </Grid>
        <Grid item sm={4}>
          <AttendanceCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default PerformanceWrapper;
