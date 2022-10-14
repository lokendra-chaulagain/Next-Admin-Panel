import React, { useState, useEffect } from "react";
import { Grid, Dialog, Button } from "@mui/material";

export default function AddEmployeeDetailDialog() {
  //Dialog controller
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [employeesDetailValues, setEmployeesDetailValues] = useState({
    fullName: "",
    profilePicture: "",
    joinDate: "",
    position: "",
    contactNumber: "",
    email: "",
  });

  const handleInputChange = (e: any) => {
    setEmployeesDetailValues({
      ...employeesDetailValues,
      [e.target.name]: e.target.value,
    });
  };
  console.log(employeesDetailValues);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form has been submitted");
  };

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          Add Member
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 " style={{ overflow: "hidden" }}>
          <h4>Add New Team Members</h4>

          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col">
              <label htmlFor="fullName" className="form-label mb-1">
                Full Name
              </label>
              <input name="fullName" value={employeesDetailValues.fullName} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="fullName" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="profilePicture" className="form-label mb-1">
                Profile Picture
              </label>

              <input name="profilePicture" value={employeesDetailValues.profilePicture} onChange={handleInputChange} type="file" className="form-control form-control-lg mb-2  border-0  rounded-0" id="profilePicture" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="joinDate" className="form-label mb-1">
                Join Date
              </label>
              <input name="joinDate" value={employeesDetailValues.joinDate} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="joinDate" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="position" className="form-label mb-1">
                Position
              </label>
              <input name="position" value={employeesDetailValues.position} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="position" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="contact" className="form-label mb-1">
                Contact Number
              </label>
              <input name="contactNumber" value={employeesDetailValues.contactNumber} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="contact" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label mb-1">
                Email Address
              </label>
              <input name="email" value={employeesDetailValues.email} onChange={handleInputChange} type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="email" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button className="customCard px-3" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" className="customCard px-4" onClick={handleClose}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
