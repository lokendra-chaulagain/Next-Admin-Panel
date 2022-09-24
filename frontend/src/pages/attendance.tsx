import React from "react";
import AttendanceGridTable from "../@mui/AttendanceGridTable";
import AttendanceSpendTimeInOfficeGridTable from "../@mui/AttendanceSpendTimeInOfficeGridTable";


function Attendance() {
  return (
    <div>
      <AttendanceGridTable />
      <AttendanceSpendTimeInOfficeGridTable/>
    </div>
  );
}

export default Attendance;
