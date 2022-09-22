import React from 'react'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import img from '../../public/6.jpg'
import Image from 'next/image'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

const EmployeeInfoCrd = () => {
  return (
    <Grid container className="customCard" p={2}>
      <Grid item container xs={6} gap={2}>
        <Grid>
          <Avatar sx={{ width: 150, height: 150 }}>
            <Image src={img} alt="loki" />
          </Avatar>
        </Grid>

        <Grid gap={5}>
          <Grid component="h2">Lokendra Chaulagain</Grid>
          <Typography mt={1}>
            Team: <span>Developer</span>
          </Typography>
          <Typography mt={1}>
            Position: <span>WebApp Developer</span>
          </Typography>
          <Typography mt={1}>
            Employee ID : <span>095343474</span>
          </Typography>
          <Typography mt={1}>
            Date of Join :<span>1st Jan 2013</span>
          </Typography>
          <Box mt={2}>
            <Button variant="contained">Send Mail</Button>
          </Box>
        </Grid>
      </Grid>

      {/* Right side */}
      <Grid item xs={6}>
        <Grid
          container
          alignContent="center"
          justifyContent="space-between "
          className="cp"
        >
          <Typography mt={1}>
            Phone : <span>9864755749</span>
          </Typography>
          <EditOutlinedIcon />
        </Grid>

        <Typography mt={1}>
          Email : <span>lokendrachaulagain803@gmail.com</span>
        </Typography>
        <Typography mt={1}>
          birthday : <span>june 27 2000</span>
        </Typography>
        <Typography mt={1}>
          primary Address : <span> Kathmandu Nepal</span>
        </Typography>
        <Typography mt={1}>
          Secondary Address: <span>Tikapur Kailali</span>
        </Typography>
        <Typography mt={1}>
          Gender : <span>Male</span>{' '}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default EmployeeInfoCrd
