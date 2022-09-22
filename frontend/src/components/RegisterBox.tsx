import * as React from 'react'
import {
  Box,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material'
import { useFormik } from 'formik'
import { Formik } from 'formik'

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
}

const onSubmit = (values: any) => {
  console.log(values)
}

export default function RegisterBox() {
  //useFormik hooks takes an object as an parameter
  const formik = useFormik({
    initialValues,
    onsubmit,
  } as any)

  console.log('Formik Values :', formik.values)

  return (
    <Grid minWidth="500px" className="customCard">
      <form onSubmit={formik.handleSubmit}>
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
              name="email"
              //here onChange props tracks the values and we assign that value to values props
              onChange={formik.handleChange}
              value={formik.values.email}
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
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
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
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </Box>

          <Box mt={3}>
            <Button type="submit" fullWidth size="large" variant="contained">
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
      </form>
    </Grid>
  )
}
