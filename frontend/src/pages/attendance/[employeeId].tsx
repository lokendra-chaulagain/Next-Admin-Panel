import React from "react";
import AttendanceGridTable from "../../@mui/AttendanceGridTable";
import AttendanceSpendTimeInOfficeGridTable from "../../@mui/AttendanceSpendTimeInOfficeGridTable";

const EmployeeID = () => {
  return (
    <div>
      <AttendanceGridTable />
      <AttendanceSpendTimeInOfficeGridTable />
    </div>
  );
};

export default EmployeeID;
