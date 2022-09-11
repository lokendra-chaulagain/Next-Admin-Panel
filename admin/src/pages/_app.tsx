import type { AppProps } from "next/app";
import "../../styles/globals.css";
import Appbar from "../components/Appbar";
import { Box, Grid } from "@mui/material";
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
      </Provider>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
