import { Grid } from '@mui/material'
import React from 'react'
import EmployeeEducationCard from '../../@mui/EmployeeEducationCard'
import EmployeeEmergencyContactCard from '../../@mui/EmployeeEmergencyContactCard'
import EmployeeInfoCrd from '../../@mui/EmployeeInfoCrd'
import EmployeePersonalInformationCard from '../../@mui/EmployeePersonalInformationCard'

function EmployeeId() {
  return (
    <>
      <EmployeeInfoCrd />
      <Grid container gap={3}>
        <Grid item xs={5.9}>
          <EmployeePersonalInformationCard />
        </Grid>
        <Grid item xs={5.9}>
          <EmployeeEmergencyContactCard />
        </Grid>
      </Grid>

      <Grid container gap={3}>
        <Grid item xs={5.9}>
          {/* <EmployeeEducationCard/> */}
        </Grid>
        <Grid item xs={5.9}>
          <EmployeeEmergencyContactCard />
        </Grid>
      </Grid>
    </>
  )
}

export default EmployeeId
