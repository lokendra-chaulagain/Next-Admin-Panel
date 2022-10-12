import React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
]

const attendances = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 0, 0,
]

function createData() {
  return {
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  }
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"></TableCell>

        {attendances.map((attendance: any, index: any) => (
          <TableCell  className='customPrimaryTxtColor' key={index} align="right">{attendance}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">History</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className='customPrimaryTxtColor' >Date</TableCell>
                    <TableCell className='customPrimaryTxtColor'>Customer</TableCell>
                    <TableCell className='customPrimaryTxtColor' align="right">Amount</TableCell>
                    <TableCell className='customPrimaryTxtColor' align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className='customPrimaryTxtColor' component="th" scope="row">date</TableCell>
                    <TableCell className='customPrimaryTxtColor'>id</TableCell>
                    <TableCell className='customPrimaryTxtColor' align="right">amount</TableCell>
                    <TableCell  className='customPrimaryTxtColor' align="right">gg</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const rows = [createData()]

export default function AttendanceGridTable() {
  return (
    <TableContainer component={Paper} className='customCard'>
      <Typography>Monthly Attendance</Typography>
      <hr />

      <Table aria-label="collapsible table">
        <TableHead >
          <TableRow>
            <TableCell className='customPrimaryTxtColor'>Employee Name</TableCell>
            {days.map((day, index) => (
              <TableCell className='customPrimaryTxtColor' key={index} align="right">{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{rows.map((row, index) => (<Row key={index} row={row} />))}</TableBody>
      </Table>
    </TableContainer>
  )
}
