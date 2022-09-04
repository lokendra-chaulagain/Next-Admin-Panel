import Appbar from "../components/Appbar";
import LeftAppBar from "../components/LeftBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductTable from "../components/ProductTable";

export default function Product() {
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
          <ProductTable />
        </Grid>
      </Grid>
    </Box>
  );
}
