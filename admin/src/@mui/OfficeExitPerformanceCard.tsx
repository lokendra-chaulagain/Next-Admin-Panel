import * as React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import AttendanceProgressBar from './AttendanceProgressBar'

export default function OfficeExitPerformanceCard() {
  return (
    <Card variant="outlined" className="customCard">
      <CardContent>
        <Typography variant="h5" component="div" className="phc">
          Office Entry Performance
        </Typography>
        <AttendanceProgressBar />
      </CardContent>
    </Card>
  )
}
