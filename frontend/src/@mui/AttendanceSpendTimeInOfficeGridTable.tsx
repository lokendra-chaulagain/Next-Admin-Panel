import * as React from 'react'
import {
  Table,
  Typography,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
]

const hours = [
  6.36, 8.45, 1, 0, 7.42, 2, 0, 2, 7.31, 2, 3, 3, 3, 3, 3, 0, 4, 4, 4, 0, 5, 5,5, 5, 5, 6, 6, 6, 6, 6, 7, 7,
]

export default function AttendanceGridTable1AttendanceGridTable1() {
  return (
    <TableContainer className="customCard mt-5 ">
      <Typography>
        This is the table where working hour will be dispklayed and color will
        be shown according to the hour
      </Typography>
      <hr />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className='customPrimaryTxtColor' style={{ display: 'flex' }}>Employee Name</TableCell>
            {days.map((day: any, index: any) => (
              <TableCell className='customPrimaryTxtColor' key={index} align="right">
                <div style={{ gap: '5px' }}>
                  <span style={{ marginRight: '10px' }}>January</span>
                  <span>{day}</span>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell className='customPrimaryTxtColor' component="th" scope="row">
              Lokendra
            </TableCell>
            {hours.map((hour: any, index: any) => (
              <TableCell className='customPrimaryTxtColor' key={index} align="right">
                {hour >= 7 ? (
                  <CheckIcon color='success' />
                ) : hour == 0 ? (
                  <CloseIcon />
                ) : (
                  hour + 'hour'
                )}
              </TableCell>
            ))}
            
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
