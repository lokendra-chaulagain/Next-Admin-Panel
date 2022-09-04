import React from "react";
import Appbar from "../components/Appbar";
import LeftAppBar from "../components/LeftBar";
import OurStaffTable from "../components/OurStaffTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function OurStaff() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Appbar />
      <Grid container spacing={1}>
        <Grid item md={3}>
          <LeftAppBar />
        </Grid>
        <Grid container item md={8}>
          <OurStaffTable />
        </Grid>
      </Grid>
    </Box>
  );
}
