import React from "react";
import { Typography } from "@mui/material";
import EditEmployeePersonalInformationDialog from "./EditEmployeePersonalInformationDialog";

const EmployeePersonalInformationCard = () => {
  return (
    <div className="row customCard py-3">
      <div className="d-flex justify-content-between mb-2">
        <h4>Personal Information</h4>
        <EditEmployeePersonalInformationDialog />
      </div>
      <div className="col">
        <Typography className="my-2"> Citizenship Number </Typography>
        <Typography className="my-2"> Nationality </Typography>
        <Typography className="my-2"> Material Status </Typography>
        <Typography className="my-2"> Telephone </Typography>
        <Typography className="my-2"> Phone</Typography>
        <Typography className="my-2"> Bank Name </Typography>
        <Typography className="my-2"> PAN Number</Typography>
      </div>
      <div className="col">
        <Typography className="my-2"> 09494746394 </Typography>
        <Typography className="my-2"> rjhe74t46 </Typography>
        <Typography className="my-2">484474gh746</Typography>
        <Typography className="my-2"> 4i4u8y4hfdyr </Typography>
        <Typography className="my-2"> 4uu4y78486454 </Typography>
        <Typography className="my-2"> 8746g464</Typography>
        <Typography className="my-2">jjdhfff </Typography>
      </div>
    </div>
  );
};

export default EmployeePersonalInformationCard;
