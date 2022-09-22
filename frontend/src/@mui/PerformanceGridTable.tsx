import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "SN", width: 90 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 200,
    editable: true,
  },

  {
    field: "empId",
    headerName: "EmployeeID",
    type: "number",
    width: 110,
    editable: true,
  },

  {
    field: "totalLeaveTaken",
    headerName: "Total Leave Taken",
    type: "string",
    width: 200,
    editable: true,
  },

  {
    field: "actions",
    headerName: "Actions",
    type: "string",
    width: 200,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    fullName: "Lokendra Chaulagain",
    empId: 763,
    totalLeaveTaken: "2 days",
  },
  {
    id: 2,
    fullName: "Lannister",
    empId: 763,
    totalLeaveTaken: "2 days",
  },
  {
    id: 3,
    fullName: "Lannister",
    empId: 763,
    totalLeaveTaken: "2 days",
  },
];

export default function PerformanceGridTable() {
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
