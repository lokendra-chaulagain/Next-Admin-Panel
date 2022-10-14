import React, { useState, useEffect } from "react";
import { Dialog, Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function EditEmergencyContactDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <>
      <div>
        <IconButton aria-label="edit " onClick={handleClickOpen}>
          <EditOutlinedIcon fontSize="inherit" color="primary" />
        </IconButton>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <div className="customCard p-3 " style={{ overflow: "hidden" }}>
          <h4>Edit Emergency Contact</h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>
          <div className="row">
            <div className="col">
              <label htmlFor="fullName" className="form-label mb-1">
                Full Name
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="fullName" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="contact" className="form-label mb-1">
                Relationship
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="contact" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label mb-1">
                Phone
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="email" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col">
              <label htmlFor="fullName" className="form-label mb-1">
                Full Name
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="fullName" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="contact" className="form-label mb-1">
                Relationship
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="contact" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label mb-1">
                Phone
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="email" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button className="customCard px-3" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="customCard px-4" onClick={handleClose}>
              Save
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
