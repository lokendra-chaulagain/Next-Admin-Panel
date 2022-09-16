import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import img from '../../public/6.jpg'
import Image from 'next/image'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

const EmployeeEducationCard = () => {
  return (
    <Box className="customCard" p={2} pb={5}>
      <Grid container justifyContent="space-between">
        <Typography variant="h5">Education Information</Typography>
        <EditOutlinedIcon className="cp" />
      </Grid>

      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  )
}

export default EmployeeEducationCard
