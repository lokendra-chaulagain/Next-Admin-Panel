import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress'
import PunchCardCircularProgress from './PunchCardCircularProgress'
import { Grid } from '@mui/material'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function AttendancePunchCard() {
  return (
    <Card className="customCard">
      {/* sx={{ minWidth: 600 }} */}
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
          sx={{ mb: 1.5 }} color="text.secondary"
        </Typography> */}

        <Typography style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" className="phc">
            Timesheet
          </Typography>
          <Typography variant="h6" className="shc">
            11 Mar 2019
          </Typography>
        </Typography>

        <Box>
          <Typography variant="h5" className="phc">
            Punch In at
          </Typography>
          <Typography className="shc">Wed, 11th Mar 2019 10.00 AM</Typography>
        </Box>

        <PunchCardCircularProgress />

        <Button variant="contained" size="large">
          Large
        </Button>
      </CardContent>
      <CardActions>
        <Grid container gap={5}>
          <Grid item className="customCard" paddingY={1} paddingX={10}>
            <h5>Break</h5>
            <h5>Break</h5>
          </Grid>
          <Grid item className="customCard" paddingY={1} paddingX={10}>
            <h5>right</h5>
            <h5>right2</h5>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
