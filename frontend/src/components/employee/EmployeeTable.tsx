import * as React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddEmployeeDetailDialog from "./AddEmployeeDetailDialog";
import Link from "next/link";
import DeleteAlert from "../DeleteAlert";
import EditEmployeeDialog from "./EditEmployeeDialog";

export default function EmployeeTable({ employee}: any) {
  return (
    <>
      <AddEmployeeDetailDialog />
      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Full Name</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Position</th>
              <th scope="col">Contact</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee &&
              employee.map((employee: any, index: any) => (
                <tr key={index} className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{employee.fullName}</td>
                  <td>{employee._id}</td>
                  <td>{employee.position}</td>
                  <td>{employee.contact}</td>
                  <td>{employee.email}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`staffDetails/1`}>
                        <IconButton aria-label="delete">
                          <VisibilityIcon fontSize="inherit" color="warning" />
                        </IconButton>
                      </Link>
                      <EditEmployeeDialog />
                      <DeleteAlert />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
