import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import {
  Box,
  colors,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material'
import LeftAppBar from '../components/LeftBar'
import Topbar from '../components/Topbar'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
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
  const location = router.pathname.split('/')[1]

  return (
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
                <Topbar />
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
                        <span className="customPrimaryTxtColor">Dashboard</span>

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
  )
}

export default MyApp
