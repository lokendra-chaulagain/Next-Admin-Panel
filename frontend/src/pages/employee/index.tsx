import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAllEmployee } from "../../../redux/employee/employeeActions";
import EmployeeTable from "../../components/employee/EmployeeTable";
import EmployeeProfileCard from "../../components/employee/EmployeeProfileCard";

function Employee() {
  const dispatch = useAppDispatch();
  const { employee } = useAppSelector((state: any) => state.employeeStore);

  React.useEffect(() => {
    dispatch(fetchAllEmployee());
  }, [dispatch]);

  return (
    <>
      <EmployeeTable employee={employee} />
      <div className="mt-5 pt-5 d-flex flex-wrap gap-3">
        <EmployeeProfileCard employee={employee} />
      </div>
    </>
  );
}

export default Employee;
