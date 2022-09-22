import * as React from 'react'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'

export default function CardMedium() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className="customCard"
      p={3}
      style={{ width: '400px' }}
    >
      <Grid item>
        <Inventory2OutlinedIcon style={{ fontSize: '60px' }} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Today Order</Typography>
        <Typography variant="h4">$ 0</Typography>
      </Grid>
    </Grid>
  )
}
