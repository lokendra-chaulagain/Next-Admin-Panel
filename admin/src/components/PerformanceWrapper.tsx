import React from "react";
import AttendanceCard from "../@mui/AttendanceCard";
import PerformanceGridTable from "../@mui/PerformanceGridTable";
import { Grid } from "@mui/material";
import OfficeEntryPerformanceCard from "../@mui/OfficeEntryPerformanceCard";
import OfficeExitPerformanceCard from "../@mui/OfficeExitPerformanceCard";

const PerformanceWrapper = () => {
  return (
    <div>
      <PerformanceGridTable />

      <Grid container spacing={4}>
        <Grid item sm={4}>
          <AttendanceCard />
        </Grid>
        <Grid item sm={4}>
          <OfficeEntryPerformanceCard />
        </Grid>
        <Grid item sm={4}>
          <OfficeExitPerformanceCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default PerformanceWrapper;
