import * as React from "react";
import { Box, IconButton, Grid, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

import AddEmployeeDetailDialog from "./AddEmployeeDetailDialog";
import EditEmployeeDetailDialog from "./EditEmployeeDetailDialog";

const columns: GridColDef[] = [
  { field: "id", headerName: "SN", width: 20 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 230,
  },

  {
    field: "empID",
    headerName: "ID",
    type: "string",
    width: 100,
  },

  {
    field: "position",
    headerName: "Position",
    type: "string",
    width: 200,
  },

  {
    field: "age",
    headerName: "Age (Y)",
    type: "string",
    width: 100,
  },

  {
    field: "contact",
    headerName: "Contact",
    type: "string",
    width: 120,
  },

  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 250,
  },

  {
    field: "description",
    headerName: "Description",
    type: "string",
    width: 200,
  },

  {
    field: "actions",
    headerName: "Actions",
    type: "string",
    width: 120,

    renderCell: (params) => {
      const handleEditClick = (e: { stopPropagation: () => void }) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach((c) => (thisRow[c.field] = params.getValue(params.id, c.field)));

        return alert(JSON.stringify(thisRow, null, 4));
      };

      // return <Button onClick={onClick}>Click</Button>;
      return (
        <Stack direction="row">
          <EditEmployeeDetailDialog onClick={handleEditClick} />
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" color="warning" />
          </IconButton>
        </Stack>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    fullName: "fullName",
    age: "22",
    empID: 763,
    position: "WebApp Developer",
    contact: "9864755749",
    email: "lokendrachaulagain803@gmail.com",
    description: "Lorem Ipsum is simply dummy",
  },

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

export default function AttendanceGridTable1() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid className="customCard" rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick experimentalFeatures={{ newEditingApi: true }} />
    </Box>
  );
}
