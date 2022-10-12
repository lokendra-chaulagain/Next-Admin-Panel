import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "SN", width: 90 },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 150,
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
    field: "from",
    headerName: "From",
    type: "string",
    width:150,
    editable: true,
  },


  {
    field: "to",
    headerName: "To",
    type: "string",
    width:150,
    editable: true,
  },

  {
    field: "noOfDays",
    headerName: "No of Days",
    type: "string",
    width: 100,
    editable: true,
  },

  {
    field: "leaveTakenHour",
    headerName: "LeaveTaken(hours)",
    type: "number",
    width:200,
    editable: true,
  },

  {
    field: "approvedBy",
    headerName: "ApprovedBy",
    type: "string",
    width:200,
    editable: true,
  },

  {
    field: "actions",
    headerName: "Actions",
    type: "string",
    width:200,
    editable: true,
  },



];

const rows = [
  { id: 1, fullName: "Lokendra Chaulagain", empId: 763, from:"Mar 8, 2019", to:"Mar 8, 2019",noOfDays:"2 days",leaveTakenHour:"2022/08/04" +"2hour 5min" },
  { id: 2, fullName: "Lannister", empId: 763, from:"Mar 8, 2019", to:"Mar 8, 2019",noOfDays:"2 days",leaveTakenHour:"2022/08/04" +"2hour 5min" },
  { id: 3, fullName: "Lannister", empId: 763, from:"Mar 8, 2019", to:"Mar 8, 2019",noOfDays:"2 days",leaveTakenHour:"2022/08/04" +"2hour 5min" },
  
];

export default function LeavesGridTable() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
      className="customCard" 
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
