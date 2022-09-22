import * as React from 'react'
import {
  DialogTitle,
  Grid,
  DialogContentText,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
} from '@mui/material'

export default function AddProductDialog() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Grid container justifyContent="end">
        <Button variant="contained" size="large" onClick={handleClickOpen}>
          Add Product
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <Box className="customCard">
          <DialogTitle>Add New Team MEmbers</DialogTitle>
          <DialogContent>
            <DialogContentText className="customPrimaryTxtColor">
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Typography color="secondary.main">Full Name</Typography>
                <TextField fullWidth sx={{ marginTop: '5px' }} />
              </Grid>
              <Grid item xs={6}>
                <Typography>ID</Typography>
                <TextField fullWidth sx={{ marginTop: '5px' }} />
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Typography>Position</Typography>
                <TextField fullWidth sx={{ marginTop: '5px' }} />
              </Grid>
              <Grid item xs={6}>
                <Typography>Age</Typography>
                <TextField fullWidth sx={{ marginTop: '5px' }} />
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Typography>Contact</Typography>
                <TextField fullWidth sx={{ marginTop: '5px' }} />
              </Grid>
              <Grid item xs={6}>
                <Typography>Email</Typography>
                <TextField fullWidth sx={{ marginTop: '5px' }} />
              </Grid>
            </Grid>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={12}>
                <Typography>Description</Typography>
                <TextField fullWidth sx={{ marginTop: '5px' }} />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Add</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  )
}
