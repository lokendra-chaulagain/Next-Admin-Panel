import DashboardCard1 from "../components/DashboardCard1";
import LeftAppBar from "../components/LeftBar";
import { Box, Stack, Grid, Container } from "@mui/material";
import DashboardCardRow2 from "../components/DashboardCardRow2";

export default function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <LeftAppBar />
        </Grid>
        <Grid item xs={10}>
          <h1>Dashboard</h1>
          <DashboardCard1 />
          <DashboardCardRow2 />
        </Grid>
      </Grid>
    </Box>
  );
}
