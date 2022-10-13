import * as React from "react";
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

  return (
    <>
      <div>
        <IconButton aria-label="edit " onClick={handleClickOpen}>
          <EditOutlinedIcon fontSize="inherit" color="primary" />
        </IconButton>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <div className="customCard p-3 " style={{ overflow: "hidden" }}>
          <h4>Edit Personal Information</h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>
          <div className="row">
            <div className="col">
              <label htmlFor="fullName" className="form-label mb-1">
                Citizen Number
              </label>
              <input type="email" className="form-control form-control-lg mb-2  border-0  rounded-0" id="fullName" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="profilePicture" className="form-label mb-1">
                Nationality
              </label>

              <input type="text" className="form-control form-control-lg mb-2   border-0  rounded-0" id="profilePicture" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="employeeId" className="form-label ">
                Material status
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="employeeId" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="position" className="form-label mb-1">
                Telephone
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="position" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="contact" className="form-label mb-1">
                Phone Number
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="contact" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label mb-1">
                Bank Name
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="email" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="contact" className="form-label mb-1">
                Bank Account No
              </label>
              <input type="email" className="form-control form-control-lg mb-2   border-0  rounded-0" id="contact" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="email" className="form-label mb-1">
                Bank Name
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
