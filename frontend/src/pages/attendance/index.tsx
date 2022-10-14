import React from "react";
import AttendancePunchCard from "../../@mui/AttendancePunchCard";
import AttendanceTable from "../../components/AttendanceTable";

function Attendance() {
  return (
    <div>
      <AttendanceTable />
      <AttendancePunchCard />
    </div>
  );
}

export default Attendance;
