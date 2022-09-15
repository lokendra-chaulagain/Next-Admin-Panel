import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import OurStaffTableActionIcons from "./OurStaffTableActionIcons";
import styles from "../../styles/OurStaff.module.css";
import { color } from "@mui/system";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullName", headerName: "NAME", width: 250 },

  {
    field: "email",
    headerName: "EMAIL",
    width: 350,
  },
  {
    field: "contact",
    headerName: "CONTACT",
    width: 150,
  },

  {
    field: "joiningDate",
    headerName: "JOINING DATE",
    type: "number",
    width: 200,
  },

  {
    field: "role",
    headerName: "ROLE",
    width: 200,
  },

  {
    field: "action",
    headerName: "ACTION",
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    fullName: "Lokendra Chaulagain",
    email: "lokendrachaulagain803@gmail.com",
    contact: "9864755749",
    role: "WebAPP Developer",
    joiningDate: "2022/04/09",
    age: 35,
  },

  {
    id: 2,
    fullName: "Snow",
    email: "loki@gmail.com",
    contact: "9864755749",
    role: "WebAPP Developer",
    joiningDate: "2022/04/09",
    age: 35,
  },

  {
    id: 3,
    fullName: "Snow",
    email: "loki@gmail.com",
    contact: "9864755749",
    role: "WebAPP Developer",
    joiningDate: "2022/04/09",
    age: 35,
  },

  {
    id: 4,
    fullName: "Snow",
    email: "loki@gmail.com",
    contact: "9864755749",
    role: "WebAPP Developer",
    joiningDate: "2022/04/09",
    age: 35,
  },
];

export default function OurStaffTable() {
  return (
    <div
      className={`${styles.ourStaffTable} `}
      style={{ height: 500, width: "100%", }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
