import type { AppProps } from "next/app";
import "../../styles/globals.css";
import Appbar from "../components/Appbar";
import { Box, Grid } from "@mui/material";
import LeftAppBar from "../components/LeftBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Appbar />
      <Grid container spacing={2}>
        <Grid item xs={3} lg={2}>
          <LeftAppBar />
        </Grid>
        <Grid item xs={9} lg={10}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyApp;
