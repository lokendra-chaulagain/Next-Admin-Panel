import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "id", headerName: "SN", width: 20 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 230,
    editable: true,
  },

  {
    field: "empID",
    headerName: "ID",
    type: "string",
    width: 100,
    editable: true,
  },

  {
    field: "position",
    headerName: "Position",
    type: "string",
    width: 200,
    editable: true,
  },

  {
    field: "age",
    headerName: "Age (Y)",
    type: "string",
    width: 100,
    editable: true,
  },

  {
    field: "contact",
    headerName: "Contact",
    type: "string",
    width: 120,
    editable: true,
  },

  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 250,
    editable: true,
  },

  {
    field: "description",
    headerName: "Description",
    type: "string",
    width: 200,
    editable: true,
  },

  {
    field: "actions",
    headerName: "Actions",
    type: "string",
    width: 100,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    fullName: "fullName",
    age: 22,
    empID: 763,
    position: "WebApp Developer",
    contact: "9864755749",
    email: "lokendrachaulagain803@gmail.com",
    description: "Lorem Ipsum is simply dummy",
  },
];

export default function StaffDetailsGridTable() {
  const fetchAllEmployeeDetail = async () => {
    return axios.get("http://localhost:4000/api/employeeDetail/getAll");
  };

  const { data, isError, error, isLoading } = useQuery(
    ["RQ-AllEmployeeDetail"],
    fetchAllEmployeeDetail
  );
  console.log(data);
  console.log({ isLoading, isError, error });

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
