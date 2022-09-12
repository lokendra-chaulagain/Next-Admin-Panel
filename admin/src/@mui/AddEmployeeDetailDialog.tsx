import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {
  DialogTitle,
  Grid,
  DialogContentText,
  Typography,
} from "@mui/material";

export default function AddEmployeeDetailDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <Grid container spacing={3}>
            <Grid item>
              <Typography>Full Name</Typography>
              <TextField fullWidth />
            </Grid>
            <Grid item>
              <Typography>ID</Typography>
              <TextField fullWidth />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item>
              <Typography>Position</Typography>
              <TextField fullWidth />
            </Grid>
            <Grid item>
              <Typography>Age</Typography>
              <TextField fullWidth />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item>
              <Typography>Contact</Typography>
              <TextField fullWidth />
            </Grid>
            <Grid item>
              <Typography>Email</Typography>
              <TextField fullWidth />
            </Grid>
          </Grid>

          <Grid container>
            <Typography>Description</Typography>
            <TextField fullWidth />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
