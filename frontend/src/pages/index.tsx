import Appbar from "../components/Appbar";
import DashboardCard1 from "../components/DashboardCard1";
import LeftAppBar from "../components/LeftBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DashboardCardRow2 from "../components/DashboardCardRow2";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Appbar />
      <Grid container spacing={1}>
        <Grid item md={3}>
          <LeftAppBar />
        </Grid>
        <Grid
          container
          item
          md={8}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "-100px",
          }}
        >
          <h1>Dashboard</h1>
          <DashboardCard1 />
          <DashboardCardRow2 />
        </Grid>
      </Grid>
    </Box>
  );
}
