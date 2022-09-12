// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "SN", width: 20 },
//   {
//     field: "fullName",
//     headerName: "Full Name",
//     width: 230,
//     editable: true,
//   },

//   {
//     field: "empID",
//     headerName: "ID",
//     type: "string",
//     width: 100,
//     editable: true,
//   },

//   {
//     field: "1",
//     headerName: "1",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "1",
//     headerName: "1",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "2",
//     headerName: "2",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "3",
//     headerName: "3",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "4",
//     headerName: "4",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "5",
//     headerName: "5",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "6",
//     headerName: "6",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "7",
//     headerName: "7",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "8",
//     headerName: "8",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "9",
//     headerName: "9",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "10",
//     headerName: "10",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "11",
//     headerName: "11",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "12",
//     headerName: "12",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "13",
//     headerName: "13",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "14",
//     headerName: "14",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "15",
//     headerName: "15",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "16",
//     headerName: "16",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "17",
//     headerName: "17",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "18",
//     headerName: "18",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "19",
//     headerName: "19",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "20",
//     headerName: "20",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "21",
//     headerName: "21",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "22",
//     headerName: "22",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "23",
//     headerName: "23",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "24",
//     headerName: "24",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "25",
//     headerName: "25",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "26",
//     headerName: "26",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "27",
//     headerName: "27",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "28",
//     headerName: "28",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "29",
//     headerName: "29",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "30",
//     headerName: "30",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "31",
//     headerName: "31",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "32",
//     headerName: "32",
//     type: "string",
//     width: 20,
//     editable: true,
//   },

//   {
//     field: "actions",
//     headerName: "Actions",
//     type: "string",
//     width: 100,
//     editable: true,
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     fullName: "fullName",
//     age: 22,
//     empID: 763,
//     position: "WebApp Developer",
//     contact: "9864755749",
//     email: "lokendrachaulagain803@gmail.com",
//     description: "Lorem Ipsum is simply dummy",
//   },
// ];

// export default function AttendanceGridTable() {
//   const fetchAllEmployeeDetail = async () => {
//     return axios.get("http://localhost:4000/api/employeeDetail/getAll");
//   };

//   const { data, isError, error, isLoading } = useQuery(
//     ["RQ-AllEmployeeDetail"],
//     fetchAllEmployeeDetail
//   );
//   console.log(data);
//   console.log({ isLoading, isError, error });

//   return (
//     <Box sx={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         // checkboxSelection
//         disableSelectionOnClick
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  employeeName: string,
  one: number,
  two: number,
  three: number,
  four: number,
  five: number,
  six: number,
  seven: number,
  eight: number,
  nine: number,
  ten: number,
  eleven: number,
  twelve: number,
  thirteen: number,
  fourteen: number,
  fifteen: number,
  sixteen: number,
  seventeen: number,
  eighteen: number,
  nineteen: number,
  twenty: number,
  twentyone: number,
  twentytwo: number,
  twentythree: number,
  twentyfour: number,
  twentyfive: number,
  twentysix: number,
  twentyseven: number,
  twentyeight: number,
  twentynine: number,
  thirty: number,
  thirtyone: number,
  thirtytwo: number
) {
  return {
    employeeName,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    twentyfour,
    twentyfive,
    twentysix,
    twentyseven,
    twentyeight,
    twentynine,
    thirty,
    thirtyone,
    thirtytwo,

    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.employeeName}
        </TableCell>
        <TableCell align="right">{row.one}</TableCell>
        <TableCell align="right">{row.two}</TableCell>
        <TableCell align="right">{row.three}</TableCell>
        <TableCell align="right">{row.four}</TableCell>
        <TableCell align="right">{row.five}</TableCell>
        <TableCell align="right">{row.six}</TableCell>
        <TableCell align="right">{row.seven}</TableCell>
        <TableCell align="right">{row.eight}</TableCell>
        <TableCell align="right">{row.nine}</TableCell>
        <TableCell align="right">{row.ten}</TableCell>
        <TableCell align="right">{row.eleven}</TableCell>
        <TableCell align="right">{row.twelve}</TableCell>
        <TableCell align="right">{row.thirteen}</TableCell>
        <TableCell align="right">{row.fourteen}</TableCell>
        <TableCell align="right">{row.fifteen}</TableCell>
        <TableCell align="right">{row.sixteen}</TableCell>
        <TableCell align="right">{row.seventeen}</TableCell>
        <TableCell align="right">{row.eighteen}</TableCell>
        <TableCell align="right">{row.nineteen}</TableCell>
        <TableCell align="right">{row.twenty}</TableCell>
        <TableCell align="right">{row.twentyone}</TableCell>
        <TableCell align="right">{row.twentytwo}</TableCell>
        <TableCell align="right">{row.twentythree}</TableCell>
        <TableCell align="right">{row.twentyfour}</TableCell>
        <TableCell align="right">{row.twentyfive}</TableCell>
        <TableCell align="right">{row.twentysix}</TableCell>
        <TableCell align="right">{row.twentyseven}</TableCell>
        <TableCell align="right">{row.twentyeight}</TableCell>
        <TableCell align="right">{row.twentynine}</TableCell>
        <TableCell align="right">{row.thirty}</TableCell>
        <TableCell align="right">{row.thirtyone}</TableCell>
        <TableCell align="right">{row.thirtytwo}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "Lokendra Chaulagain",

    6.0,
    24,
    4.0,
    55,
    55,
    3.99,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ),
];

export default function AttendanceGridTable() {
  return (
    <TableContainer component={Paper}>
      <Typography>
        This is the table wherepresent is tick and abscent is cross according to
        date
      </Typography>
      <hr />

      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
            <TableCell align="right">4</TableCell>
            <TableCell align="right">5</TableCell>
            <TableCell align="right">6</TableCell>
            <TableCell align="right">7</TableCell>
            <TableCell align="right">8</TableCell>
            <TableCell align="right">9</TableCell>
            <TableCell align="right">10</TableCell>
            <TableCell align="right">11</TableCell>
            <TableCell align="right">12</TableCell>
            <TableCell align="right">13</TableCell>
            <TableCell align="right">14</TableCell>
            <TableCell align="right">15</TableCell>
            <TableCell align="right">16</TableCell>
            <TableCell align="right">17</TableCell>
            <TableCell align="right">18</TableCell>
            <TableCell align="right">19</TableCell>
            <TableCell align="right">20</TableCell>
            <TableCell align="right">21</TableCell>
            <TableCell align="right">22</TableCell>
            <TableCell align="right">23</TableCell>
            <TableCell align="right">24</TableCell>
            <TableCell align="right">25</TableCell>
            <TableCell align="right">26</TableCell>
            <TableCell align="right">27</TableCell>
            <TableCell align="right">28</TableCell>
            <TableCell align="right">29</TableCell>
            <TableCell align="right">30</TableCell>
            <TableCell align="right">31</TableCell>
            <TableCell align="right">32</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.employeeName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
