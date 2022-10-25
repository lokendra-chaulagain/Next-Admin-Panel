import React, { useEffect, useState } from "react";
import AttendancePunchCard from "../../@mui/AttendancePunchCard";
import AttendanceTable from "../../components/AttendanceTable";
import axios from "axios";

function Attendance() {
  const [attendance, setAttendance] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const officeEnteredAttendance = async () => {
    setIsLoading(true);
    try {
      const res: any = await axios.post("http://localhost:4000/api/attendance/takeAttendance", {
        employeeId: "666",
        officeEnteredTime: new Date().toLocaleString().split(",")[1],
        officeExitedTime: "",
      });
      if (!res.ok) {
        throw new Error(`Error while taking attendance!!! status: ${res.status}`);
      }
      setAttendance(res.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const officeExitedAttendance = async () => {
    setIsLoading(true);
    try {
      const res: any = await axios.put(`http://localhost:4000/api/attendance/update/${"63567a2ae1f98b7a0ba608f7"}`, {
        officeExitedTime: new Date().toLocaleString().split(",")[1],
      });
      if (!res.ok) {
        throw new Error(`Error while taking attendance!!! status: ${res.status}`);
      }
      setAttendance(res.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <AttendanceTable />

      <div className="d-flex mt-5 pt-5">
        <button onClick={officeEnteredAttendance}>Reached office</button>
        <button onClick={officeExitedAttendance}>Reached office</button>
      </div>

      {/* Problem here */}
      {/* <AttendancePunchCard /> */}
    </div>
  );
}

export default Attendance;
