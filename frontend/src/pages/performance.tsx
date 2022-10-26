import React from "react";
import PerformanceTable from "../components/performance/PerformanceTable";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAllEmployee } from "../../redux/employee/employeeActions";
import AttendanceCard from "../components/performance/AttendanceCard";
import OfficeEntryPerformanceCard from "../components/performance/OfficeEntryPerformanceCard";
import OfficeExitPerformanceCard from "../components/performance/OfficeExitPerformanceCard";

function Performance() {
  const dispatch = useAppDispatch();
  const { employee } = useAppSelector((state: any) => state.employeeStore);

  React.useEffect(() => {
    dispatch(fetchAllEmployee());
  }, [dispatch]);

  return (
    <>
      <PerformanceTable employee={employee} />
      <div className="row mt-5">
        <div className="col">
          <AttendanceCard />
        </div>
        <div className="col">
          <OfficeEntryPerformanceCard />
        </div>
        <div className="col">
          <OfficeExitPerformanceCard />
        </div>
      </div>
    </>
  );
}

export default Performance;
