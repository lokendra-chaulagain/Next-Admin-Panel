import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import img from '../../public/6.jpg'
import Image from 'next/image'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

const EmployeeEducationCard = () => {
  return (
    <Box className="customCard" p={2} pb={5}>
      <Grid container justifyContent="space-between">
        <Typography variant="h5">Education Information</Typography>
        <EditOutlinedIcon className="cp" />
      </Grid>
    </Box>
  )
}

export default EmployeeEducationCard
