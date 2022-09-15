import DashboardCard1 from '../components/DashboardCard1'
import { Box, Grid } from '@mui/material'
import DashboardCardRow2 from '../components/DashboardCardRow2'

export default function Home() {
  return (
    <Box>
      <h1>Dashboard</h1>
      <DashboardCard1 />
      <DashboardCardRow2 />
    </Box>
  )
}
