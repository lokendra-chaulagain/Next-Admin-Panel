import Appbar from "../components/Appbar";
import LeftAppBar from "../components/LeftBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CategoryTable from "../components/CategoryTable";

export default function Category() {
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
          <CategoryTable />
        </Grid>
      </Grid>
    </Box>
  );
}
