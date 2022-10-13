import type { AppProps } from "next/app";
import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Grid, Typography } from "@mui/material";
import LeftAppBar from "../components/LeftBar";
import Topbar from "../components/Topbar";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  const router = useRouter();
  const location = router.pathname.split("/")[1];

  return (
    <Provider store={store}>
      <Box className="customBg" style={{ height: "100vh" }}>
        <>
          {location === "login" || location === "register" ? (
            <Grid container>
              <Component {...pageProps} />
            </Grid>
          ) : (
            <>
              <Topbar />
              <Grid container>
                <Grid item xs={3} lg={2} className="customLeftBar">
                  <LeftAppBar />
                </Grid>

                {/* Right side */}
                <Grid item xs={9} lg={10} p={5} className="right_side_bg">
                  <Grid item marginBottom={5} xs={6}>
                    <Typography variant="h4" className="customPrimaryTxtColor">
                      Attendance
                    </Typography>
                    <Typography variant="h6" className="customSecondaryTxtColor">
                      <span className="customPrimaryTxtColor">Dashboard / </span>

                      <span className="customSecondaryTxtColor">Attendance / </span>

                      <span className="customSecondaryTxtColor">Something </span>
                    </Typography>
                  </Grid>
                  <Component {...pageProps} />
                </Grid>
              </Grid>
            </>
          )}
        </>
      </Box>
    </Provider>
  );
}

export default MyApp;
