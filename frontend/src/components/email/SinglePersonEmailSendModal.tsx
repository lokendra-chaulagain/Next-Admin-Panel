import React from "react";
import { Dialog, Button } from "@mui/material";

const SinglePersonEmailSendModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button aria-label="edit " onClick={handleClickOpen} className="table_button " size="small" data-bs-target="#singlePersonMailSend">
        Send Mail
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <form className="customCard p-3 " style={{ overflow: "hidden" }}>
          <h4>Send Mail To Individual Person</h4>

          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className=" p-2 rounded-1" style={{ backgroundColor: "#16181d", color: "#bbc4cc", border: "1px solid #2d3741 " }}>
            <div className="d-flex justify-content-between">
              <small className=" fs-5 " id="">
                To lokendrachaulagain803@gmail.com
              </small>
            </div>
            <div className=" p-0 mt-3">
              <textarea className="form-control border-0 rounded-1" placeholder="" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
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
};

export default SinglePersonEmailSendModal;
