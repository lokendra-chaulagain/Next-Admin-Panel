import React from "react";
import { Avatar, Typography } from "@mui/material";
import img from "../../public/6.jpg";
import Image from "next/image";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SinglePersonEmailSendModal from "../components/email/SinglePersonEmailSendModal";
import EditEmployeeInformationDialog from "./EditEmployeeInformationDialog";

const EmployeeInfoCard = () => {
  return (
    <div className=" row customCard py-3">
      <div className="d-flex justify-content-between mb-2">
        <h4>Employee Information</h4>
        {/* <EditOutlinedIcon /> */}
        <EditEmployeeInformationDialog/>
      </div>
      <div className="col">
        <Avatar sx={{ width: "128px", height: "128px" }}>
          <Image src={img} alt="loki" />
        </Avatar>
        <h4 className="my-2">Lokendra Chaulagain</h4>
        <Typography className="my-2"> Team : Developer </Typography>
        <Typography className="my-2"> Position : WebApp developer </Typography>
        <Typography className="my-2"> Employee ID: 74993745 </Typography>
      </div>
      <div className="col">
        <Typography className="my-2"> Date of Join : 1st Jan 2013 </Typography>
        <Typography className="my-2"> Phone : Developer </Typography>
        <Typography className="my-2"> Email : Developer </Typography>
        <Typography className="my-2"> Birthday : Developer </Typography>
        <Typography className="my-2"> Primary Address : Developer </Typography>
        <Typography className="my-2"> Secondary Address: Developer </Typography>
        <Typography className="my-2"> Gender : Developer </Typography>
        <div className="mt-3">
          <SinglePersonEmailSendModal />
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfoCard;
