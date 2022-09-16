import React from 'react'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import img from '../../public/6.jpg'
import Image from 'next/image'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

const EmployeePersonalInformationCard = () => {
  return (
    <Box className="customCard" p={2} pb={5}>
      <Grid container justifyContent="space-between">
        <Typography variant="h5">Personal Information</Typography>
        <EditOutlinedIcon className="cp" />
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Typography mt={1}>Citizen No.</Typography>
          <Typography mt={1}>Nationality</Typography>
          <Typography mt={1}>Material Status</Typography>
          <Typography mt={1}>Telephone</Typography>
          <Typography mt={1}>Phone</Typography>
          <Typography mt={1}>Bank Name</Typography>
          <Typography mt={1}>Bank account No.</Typography>
          <Typography mt={1}>PAN no</Typography>
          
        </Grid>
        <Grid item xs={6}>
          <Typography mt={1}>123456789</Typography>
          <Typography mt={1}>Nepali</Typography>
          <Typography mt={1}>Married</Typography>
          <Typography mt={1}>091560245</Typography>
          <Typography mt={1}>9864755749</Typography>
          <Typography mt={1}>Nabil Bank</Typography>
          <Typography mt={1}>162548946454946454</Typography>
          <Typography mt={1}>735463475NPL</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EmployeePersonalInformationCard
