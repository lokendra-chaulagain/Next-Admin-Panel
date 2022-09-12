import React from 'react'
import AddEmployeeDetailDialog from '../@mui/AddEmployeeDetailDialog'
import StaffDetailsGridTable from '../@mui/StaffDetailsGridTable'

function staffDetails() {
  return (
    <div>
        <StaffDetailsGridTable/>
        <AddEmployeeDetailDialog/>
    </div>
  )
}

export default staffDetails