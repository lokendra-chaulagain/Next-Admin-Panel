import * as React from "react";
import { Grid, Dialog, Button } from "@mui/material";

export default function AddEmployeeDetailDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          Add Member
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <div className="customCard p-3 " style={{ overflow: "hidden" }}>
          <h4>Add New Team Members</h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>
          <div className="row">
            <div className="col">
              <label htmlFor="fullName" className="form-label mb-1">
                Full Name
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="fullName" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="profilePicture" className="form-label mb-1">
                Profile Picture
              </label>

              <input type="file" className="form-control form-control-lg mb-2  border-0  rounded-0" id="profilePicture" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="employeeId" className="form-label mb-1">
                Employee Id
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="employeeId" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="position" className="form-label mb-1">
                Position
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="position" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="contact" className="form-label mb-1">
                Contact
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="contact" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label mb-1">
                Email Address
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="email" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button className="customCard px-3" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="customCard px-4" onClick={handleClose}>
              Add
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
