import React from 'react'
import AddEmployeeDetailDialog from '../@mui/AddEmployeeDetailDialog'
import EditEmployeeDetailDialog from '../@mui/EditEmployeeDetailDialog'
import StaffDetailsGridTable from '../@mui/StaffDetailsGridTable'

function staffDetails() {
  return (
    <div>
      <StaffDetailsGridTable />
      <AddEmployeeDetailDialog />
      <EditEmployeeDetailDialog />
    </div>
  )
}

export default staffDetails
