import React from "react";
import Appbar from "../components/Appbar";
import LeftAppBar from "../components/LeftBar";
import OurStaffTable from "../components/OurStaffTable";
import OurStaffTopBar from "../components/OurStaffTopBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function OurStaff() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "green" }}>
      <Appbar />
      <Grid container spacing={2}>
        <Grid item xs={1.6}>
          <LeftAppBar />
        </Grid>
        <Grid item xs={8} >
          <OurStaffTopBar />
          <OurStaffTable />
          asjndsffd
        </Grid>
      </Grid>
    </Box>
  );
}
