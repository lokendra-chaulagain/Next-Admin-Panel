import React from "react";
import AttendanceGridTable from "../@mui/AttendanceGridTable";
import AttendanceSpendTimeInOfficeGridTable from "../@mui/AttendanceSpendTimeInOfficeGridTable";
import AttendanceTable from "../components/AttendanceTable";

function Attendance() {
  return (
    <div>
      <AttendanceGridTable />
      <AttendanceSpendTimeInOfficeGridTable/>
    </div>
  );
}

export default Attendance;
