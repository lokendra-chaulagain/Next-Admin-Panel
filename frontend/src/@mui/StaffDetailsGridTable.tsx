import * as React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddEmployeeDetailDialog from "./AddEmployeeDetailDialog";
import EditEmployeeDetailDialog from "./EditEmployeeDetailDialog";
import Link from "next/link";

export default function StaffDetailsGridTable() {
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
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="customPrimaryTxtColor custom_table_hover ">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <div className="d-flex ">
                  <Link href={`staffDetails/1`}>
                    <IconButton aria-label="delete">
                      <VisibilityIcon fontSize="inherit" color="warning" />
                    </IconButton>
                  </Link>
                  <EditEmployeeDetailDialog />
                  <IconButton aria-label="delete">
                    <DeleteIcon fontSize="inherit" color="warning" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="customPrimaryTxtColor custom_table_hover ">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <div className="d-flex ">
                  <Link href={`staffDetails/1`}>
                    <IconButton aria-label="delete">
                      <VisibilityIcon fontSize="inherit" color="warning" />
                    </IconButton>
                  </Link>
                  <EditEmployeeDetailDialog />
                  <IconButton aria-label="delete">
                    <DeleteIcon fontSize="inherit" color="warning" />
                  </IconButton>
                </div>
              </td>
            </tr>

            <tr className="customPrimaryTxtColor custom_table_hover ">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <div className="d-flex ">
                  <Link href={`staffDetails/1`}>
                    <IconButton aria-label="delete">
                      <VisibilityIcon fontSize="inherit" color="warning" />
                    </IconButton>
                  </Link>
                  <EditEmployeeDetailDialog />
                  <IconButton aria-label="delete">
                    <DeleteIcon fontSize="inherit" color="warning" />
                  </IconButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
