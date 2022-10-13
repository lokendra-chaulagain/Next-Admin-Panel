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
          <h4>Add New Team MEmbers</h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>
          <div className="row">
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>

              <input type="file" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="col">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control form-control-lg  border-0  rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
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
