import React from "react";
import Button from '@mui/material/Button';


const SendMailToAllCard = () => {
  return (
    <div>
      <div className="card customCard border-0 ">
        <div className="card-body customCard ">
          <h4 className="text-center">Send Email To All The Staff At Once</h4>

          <textarea className="form-control mt-4 border-0" placeholder=""  style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }}></textarea>
          <Button className="customCard mt-3 w-100"  size="large"  >Send Email</Button>

        </div>
      </div>
    </div>
  );
};

export default SendMailToAllCard;
