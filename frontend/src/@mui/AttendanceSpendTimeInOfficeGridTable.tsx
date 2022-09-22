import * as React from "react";
import { Table, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  };
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

export default function AttendanceSpendTimeInOfficeGridTable() {
  return (
    <TableContainer component={Paper}>
      <Typography>
        This is the table where working hour will be dispklayed and color will
        be shown according to the hour
      </Typography>
      <hr />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
