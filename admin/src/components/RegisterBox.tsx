import * as React from 'react'
import {
  Box,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material'

export default function RegisterBox() {
  return (
    <Grid minWidth="500px" className="customCard">
      <CardContent>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4">Register</Typography>
          <Typography variant="subtitle1">Access to our dashboard</Typography>
        </Grid>

        <Box mt={3}>
          <Typography className="customLabel">Email Address</Typography>
          <TextField
            fullWidth
            id="fullWidth"
            className="customInput"
            type="email"
            autoComplete="off"
          />
        </Box>

        <Box mt={3}>
          <Typography className="customLabel">Password</Typography>
          <TextField
            fullWidth
            id="fullWidth"
            className="customInput"
            type="password"
            autoComplete="current-password"
          />
        </Box>

        <Box mt={3}>
          <Typography className="customLabel">Confirm Password</Typography>
          <TextField
            fullWidth
            id="fullWidth"
            className="customInput"
            type="password"
            autoComplete="current-password"
          />
        </Box>

        <Box mt={3}>
          <Button fullWidth size="large" variant="contained"  >
            Register
          </Button>
        </Box>

        <Box mt={3}>
          <Grid container justifyContent="center">
            <Typography>Already have an account? </Typography>
            <Typography className="customSecondaryColor cp">Login</Typography>
          </Grid>
        </Box>
      </CardContent>
    </Grid>
  )
}
