import React from "react";
import Button from "@mui/material/Button";

const SinglePersonEmailSendModal = () => {
  return (
    <div>
      <Button className="table_button " size="small" data-bs-toggle="modal" data-bs-target="#singlePersonMailSend">
        Send Mail
      </Button>

      <div className="modal   fade" id="singlePersonMailSend" tab-index="-1" aria-labelledby="singlePersonMailSendLabel" aria-hidden="true">
        <div className="modal-dialog  ">
          <div className="modal-content p-2 " style={{ backgroundColor: "#16181d", color: "#bbc4cc", border: "1px solid #2d3741 " }}>
            <div className="d-flex justify-content-between">
              <small className="modal-title fs-5 " id="singlePersonMailSendLabel">
                To lokendrachaulagain803@gmail.com
              </small>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0 mt-3">
              <textarea className="form-control border-0" placeholder="" style={{ backgroundColor: "#2d3741", color: "#bbc4cc" }} />
            </div>
            <div className="d-flex justify-content-end gap-3 mt-3">
              <Button className="table_button " size="small" data-bs-dismiss="modal">
                Cancell
              </Button>

              <Button className="table_button " size="small">
                Send Mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePersonEmailSendModal;
