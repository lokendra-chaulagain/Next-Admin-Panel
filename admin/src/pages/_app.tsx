import type { AppProps } from "next/app";
import "../../styles/globals.css";
import Appbar from "../components/Appbar";
import { Box, Grid, Typography } from "@mui/material";
import LeftAppBar from "../components/LeftBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { store } from "../../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  //creating instance of a query client
  const queryCLient = new QueryClient();

  return (
    <QueryClientProvider client={queryCLient}>
      {/* passing queryClient instance to client props */}
      <Provider store={store}>
        <Box className="customBg">
          <Appbar />
          <Grid container>
            <Grid item xs={3} lg={2} className="customLeftBar">
              <LeftAppBar />
            </Grid>
            <Grid item xs={9} lg={10} p={5} className="custom_bg">
              <Box marginBottom={5}>
                <Typography variant="h4" className="customPrimaryTxtColor">
                  Attendance
                </Typography>
                <Typography variant="h6" className="customSecondaryTxtColor">
                  <span className="customPrimaryTxtColor"> Dashboard</span> /{" "}
                  <span className="customSecondaryTxtColor"> Attendance</span> /{" "}
                  <span className="customSecondaryTxtColor">Something</span>
                </Typography>
              </Box>
              <Component {...pageProps} />
            </Grid>
          </Grid>
        </Box>
      </Provider>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
