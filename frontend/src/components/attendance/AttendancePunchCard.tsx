import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../redux/hooks";
import { useState } from "react";
import { takeEntryAttendance } from "../../../redux/attendance/attendanceActions";
import axios from "axios";

export default function AttendancePunchCard() {
  const [attendance, setAttendance] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [attendanceValues, setAttendanceValues] = useState({
    employeeId: "12345",
    officeEnteredTime: new Date().toLocaleString().split(",")[1],
    officeExitedTime: "",
  });

  const dispatch = useAppDispatch();

  const officeEnteredAttendance = async () => {
    await dispatch(takeEntryAttendance(attendanceValues));
  };

  React.useEffect(() => {
    officeEnteredAttendance();
  });

  return (
    <Card className="customCard d-flex flex-column my-5 p-3" style={{ width: "600px" }}>
      <h6>
        Timesheet <span> 11 Mar 2019</span>{" "}
      </h6>

      <div className="customCard px-3 py-2 mt-3">
        <p className="m-0">Punch In at</p>
        <small>Wed, 11th Mar 2019 10.00 AM</small>
      </div>

      {/* circle div */}
      <div className="w-100 d-flex flex-column  align-items-center">
        <div className="rounded-circle mt-4 d-flex align-items-center justify-content-center" style={{ width: "120px", height: "120px", backgroundColor: "green" }}>
          3.45
        </div>

        <div className=" mt-4 d-flex gap-5">
          <Button onClick={officeEnteredAttendance} className="table_button" size="large">
            Punch In
          </Button>
          <Button className="table_button" size="large">
            Punch Out
          </Button>
        </div>
      </div>
    </Card>
  );
}
