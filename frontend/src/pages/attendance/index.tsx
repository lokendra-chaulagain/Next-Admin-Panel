import React from "react";
import AttendancePunchCard from "../../components/attendance/AttendancePunchCard";
import AttendanceTable from "../../components/attendance/AttendanceTable";

function Attendance() {
  return (
    <>
      <AttendanceTable />
      <AttendancePunchCard />
    </>
  );
}

export default Attendance;
