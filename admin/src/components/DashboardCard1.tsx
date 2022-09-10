import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card1 = (
  <React.Fragment>
    <CardContent className="dashboardCard1">
      <Inventory2OutlinedIcon />
      <Typography variant="h6">Today Order</Typography>
      <Typography variant="h4">$ 0</Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent className="dashboardCard2">
      <Inventory2OutlinedIcon />
      <Typography variant="h6">Today Order</Typography>
      <Typography variant="h4">$ 0</Typography>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent className="dashboardCard3">
      <Inventory2OutlinedIcon />
      <Typography variant="h6">Today Order</Typography>
      <Typography variant="h4"> $ 0</Typography>
    </CardContent>
  </React.Fragment>
);

export default function DashboardCard1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <Card variant="outlined">{card1}</Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card variant="outlined">{card2}</Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card variant="outlined">{card3}</Card>
        </Grid>
      </Grid>
    </Box>
  );
}
