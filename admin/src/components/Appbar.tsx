import * as React from 'react'
import { Grid, Typography, Toolbar, Box, AppBar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MailDialogBox from './MailDialogBox'
import NotificationDialogBox from './NotificationDialogBox'

export default function Appbar() {
  return (
    <AppBar position="static" className="customNavbar">
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Box>
            <Grid container alignItems="center" gap={2}>
              <MenuIcon className="cp" />
              <Typography variant="h6">MUI</Typography>
            </Grid>
          </Box>

          <Box>
            <Grid container gap={2}>
              <MailDialogBox />
              <NotificationDialogBox />
            </Grid>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
