import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import img from '../../public/6.jpg'
import Image from 'next/image'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import EditEmergencyContactDialog from './EditEmergencyContactDialog'

const EmployeeEmergencyContactCard = () => {
  return (
    <Box className="customCard" p={2} pb={5}>
      <Grid container justifyContent="space-between">
        <Typography variant="h5">Emergency contact</Typography>
       <EditEmergencyContactDialog/>
      </Grid>
      <Grid container>
        <Grid item  xs={6}>
          <Typography mt={1}>Name</Typography>
          <Typography mt={1}>Relationship</Typography>
          <Typography mt={1}>phone</Typography>
          <Typography mt={1}>Secondary Phone</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography mt={1}>Dev Krishna Chaulagain</Typography>
          <Typography mt={1}>Father</Typography>
          <Typography mt={1}>123456799</Typography>
          <Typography mt={1}>123456799</Typography>
        </Grid>
      </Grid>

      <Box mt={2}>
        <hr />
      </Box>

      <Grid container>
        <Grid item  xs={6}>
          <Typography mt={1}>Name</Typography>
          <Typography mt={1}>Relationship</Typography>
          <Typography mt={1}>phone</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography mt={1}>Laxmi Chaulagain</Typography>
          <Typography mt={1}>Mother</Typography>
          <Typography mt={1}>123456799</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default EmployeeEmergencyContactCard
