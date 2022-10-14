import React, { useState, useEffect } from "react";
import { Dialog, Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function EditEmployeeInformationDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [employeeInformation, setEmployeeInformation] = useState({
    team: "",
    birthday: "",
    primaryAddress: "",
    secondaryAddress: "",
    gender: "",
  });

  const handleInputChange = (e: any) => {
    setEmployeeInformation({
      ...employeeInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Personal Information form submitted");
  };

  return (
    <>
      <div>
        <IconButton aria-label="edit " onClick={handleClickOpen}>
          <EditOutlinedIcon fontSize="inherit" color="primary" />
        </IconButton>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 " style={{ overflow: "hidden" }}>
          <h4>Edit Personal Information</h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>
          <div className="row">
            <div className="col">
              <label htmlFor="team" className="form-label mb-1">
                Team
              </label>
              <input name="team" value={employeeInformation.team} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="citizenshipNumber" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="birthday" className="form-label mb-1">
                Birthday
              </label>

              <input name="birthday" value={employeeInformation.birthday} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2   border-0  rounded-0" id="nationality" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="primaryAddress" className="form-label mb-1">
                Primary Address
              </label>
              <input name="primaryAddress" value={employeeInformation.primaryAddress} onChange={handleInputChange} type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="materialStatus" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>

            <div className="col">
              <label htmlFor="secondaryAddress" className="form-label mb-1">
                Secondary Address
              </label>
              <input name="secondaryAddress" value={employeeInformation.secondaryAddress} onChange={handleInputChange} type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="phoneNumber" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="gender" className="form-label mb-1">
                Gender
              </label>
              <input name="gender" value={employeeInformation.gender} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2   border-0  rounded-0" id="bankName" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col"></div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button className="customCard px-3" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" className="customCard px-4" onClick={handleClose}>
              Save
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
