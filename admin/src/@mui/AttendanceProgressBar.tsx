import * as React from 'react'
import {
  Box,
  Typography,
  Avatar,
  LinearProgress,
  LinearProgressProps,
} from '@mui/material'

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} >
      <Avatar>L</Avatar>

      <LinearProgress
        sx={{ width: '100%', mr: 1 }}
        variant="determinate"
        {...props}
      />
      <Typography variant="body2" className="phc">
        {props.value}%
      </Typography>
    </Box>
  )
}

export default function AttendanceProgressBar() {
  const [progress, setProgress] = React.useState(20)

  return (
   
  
    <Box >
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
    
    </Box>
  )
}
