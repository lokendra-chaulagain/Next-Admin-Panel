import React, { useState, useEffect } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { askForLeave } from "../../../redux/leave/leaveActions";

export default function AskLeaveDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();
  const { employee } = useAppSelector((state: any) => state.employeeStore);

  const [leaveValues, setLeaveValues] = useState({
    employeeId: "12345",
    reason: "",
    message: "",
    duration: "",
    leaveDay: "",
  });

  const handleInputChange = (e: any) => {
    setLeaveValues({
      ...leaveValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form has been submitted");
    dispatch(askForLeave(leaveValues));
  };

  useEffect(() => {
    askForLeave({});
  }, []);

  return (
    <>
      <Grid container justifyContent="end">
        <Button size="large" onClick={handleClickOpen} className="customCard px-4">
          Ask for Leave
        </Button>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleFormSubmit} className="customCard p-3 " style={{ overflow: "hidden" }}>
          <h4>Ask for Leave</h4>

          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <div className="col">
              <label htmlFor="reason" className="form-label mb-1">
                Reason
              </label>
              <input name="reason" value={leaveValues.reason} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="reason" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="message" className="form-label mb-1">
                Message
              </label>

              <input name="message" value={leaveValues.message} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="message" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="duration" className="form-label mb-1">
                Duration
              </label>
              <input name="duration" value={leaveValues.duration} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="duration" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="leaveDay" className="form-label mb-1">
                Leave Day
              </label>
              <input name="leaveDay" value={leaveValues.leaveDay} onChange={handleInputChange} type="text" className="form-control form-control-lg mb-2  border-0  rounded-0" id="leaveDay" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
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
