import React, { useState, useEffect } from "react";
import { Dialog, Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function EditEmployeePersonalInformationDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [personalInformation, setPersonalInformation] = useState({
    citizenshipNumber: "",
    nationality: "",
    materialStatus: "",
    telephone: "",
    phoneNumber: "",
    bankName: "",
    bankAccountNumber: "",
    panNumber: "",
  });

  const handleInputChange = (e: any) => {
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Personal Information form submitted");
  };
  console.log(personalInformation);

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
              <label htmlFor="citizenshipNumber" className="form-label mb-1">
                Citizenship Number
              </label>
              <input name="citizenshipNumber" value={personalInformation.citizenshipNumber} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="citizenshipNumber" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="nationality" className="form-label mb-1">
                Nationality
              </label>

              <input name="nationality" value={personalInformation.nationality} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2   border-0  rounded-0" id="nationality" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="materialStatus" className="form-label mb-1">
                Material status
              </label>
              <input name="materialStatus" value={personalInformation.materialStatus} onChange={handleInputChange} type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="materialStatus" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="telephone" className="form-label mb-1">
                Telephone
              </label>
              <input name="telephone" value={personalInformation.telephone} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2   border-0  rounded-0" id="telephone" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="phoneNumber" className="form-label mb-1">
                Phone Number
              </label>
              <input name="phoneNumber" value={personalInformation.phoneNumber} onChange={handleInputChange} type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="phoneNumber" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="bankName" className="form-label mb-1">
                Bank Name
              </label>
              <input name="bankName" value={personalInformation.bankName} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2   border-0  rounded-0" id="bankName" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="bankAccountNumber" className="form-label mb-1">
                Bank Account No
              </label>
              <input name="bankAccountNumber" value={personalInformation.bankAccountNumber} onChange={handleInputChange} type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="bankAccountNumber" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="panNumber" className="form-label mb-1">
                PAN Number
              </label>
              <input name="panNumber" value={personalInformation.panNumber} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2   border-0  rounded-0" id="panNumber" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
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
