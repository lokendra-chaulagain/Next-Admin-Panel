import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonGroup from "@mui/material/ButtonGroup";

import Typography from "@mui/material/Typography";

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DeleteAlert() {
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
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          <RiDeleteBin6Line />
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5" gutterBottom>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </Typography>

          <Typography variant="body2" gutterBottom>
            Do you really want to delete these records? Your view this in
            your list anymore if you delete!
          </Typography>
        </DialogContent>
        <DialogActions>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>No, Keep It</Button>
            <Button>Yes, Delete It</Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </div>
  );
}
