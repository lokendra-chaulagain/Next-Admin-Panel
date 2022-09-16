import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import Appbar from '../components/Appbar'
import { Box, colors, Grid, Typography } from '@mui/material'
import LeftAppBar from '../components/LeftBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { createTheme, ThemeProvider } from '@mui/material'
import { borderColor } from '@mui/system'
import { useRouter } from 'next/router'

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
      // main:borderColor.red[500]
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // console.log(router.pathname.split('/')[1])
  const location = router.pathname.split('/')[1]

  //creating instance of a query client
  const queryCLient = new QueryClient()

  return (
    <QueryClientProvider client={queryCLient}>
      {/* passing queryClient instance to client props */}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Box className="customBg" style={{ height: '100vh' }}>
            <>
              {location === 'login' || location === 'register' ? (
                <Grid container>
                  <Component {...pageProps} />
                </Grid>
              ) : (
                <>
                  <Appbar />
                  <Grid container>
                    <Grid item xs={3} lg={2} className="customLeftBar">
                      <LeftAppBar />
                    </Grid>
                    <Grid item xs={9} lg={10} p={5} className="custom_bg">
                      <Grid item marginBottom={5} xs={6}>
                        <Typography
                          variant="h4"
                          className="customPrimaryTxtColor"
                        >
                          Attendance
                        </Typography>
                        <Typography
                          variant="h6"
                          className="customSecondaryTxtColor"
                        >
                          <span className="customPrimaryTxtColor">
                            Dashboard
                          </span>

                          <span className="customSecondaryTxtColor">
                            Attendance
                          </span>

                          <span className="customSecondaryTxtColor">
                            Something
                          </span>
                        </Typography>
                      </Grid>
                      <Component {...pageProps} />
                    </Grid>
                  </Grid>
                </>
              )}
            </>
          </Box>
        </ThemeProvider>
      </Provider>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
