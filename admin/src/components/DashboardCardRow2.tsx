import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FolderIcon from "@mui/icons-material/Folder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

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
    <CardContent className="dashboardCardRow2">
      <Stack direction="row" className="dashboardCardRow2">
        <Avatar style={{backgroundColor:"#FF5A1F"}}>
          <ShoppingCartOutlinedIcon />
        </Avatar>
        <Typography variant="body2">Total Order</Typography>
      </Stack>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent className="dashboardCardRow2">
      <Stack direction="row" className="dashboardCardRow2">
        <Avatar style={{backgroundColor:"3E83F9"}}>
          <SyncOutlinedIcon />
        </Avatar>
        <Typography variant="body2">Order Pending</Typography>
      </Stack>
    </CardContent>
  </React.Fragment>
);

const card3 = (
  <React.Fragment>
    <CardContent className="dashboardCardRow2">
      <Stack direction="row" className="dashboardCardRow2">
        <Avatar style={{backgroundColor:"#0795A2"}}>
          <AirportShuttleOutlinedIcon />
        </Avatar>
        <Typography variant="body2">Order Processing</Typography>
      </Stack>
    </CardContent>
  </React.Fragment>
);

const card4 = (
  <React.Fragment>
    <CardContent className="dashboardCardRow2">
      <Stack direction="row" className="dashboardCardRow2">
        <Avatar style={{backgroundColor:"#0F9E6E"}}>
          <CheckOutlinedIcon />
        </Avatar>
        <Typography variant="body2">Order Delivered</Typography>
      </Stack>
    </CardContent>
  </React.Fragment>
);

export default function DashboardCardRow2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">{card1}</Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">{card2}</Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">{card3}</Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">{card4}</Card>
        </Grid>
      </Grid>
    </Box>
  );
}
