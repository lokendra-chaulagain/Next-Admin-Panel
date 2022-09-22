import { Box, Stack } from '@mui/material'
import CardLarge from '../@mui/CardLarge'
import CardMedium from '../@mui/CardMedium'
import CardSmall from '../@mui/CardSmall'

export default function Home() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <CardMedium />
        <CardMedium />
        <CardMedium />
        <CardMedium />
      </Stack>

      <Stack direction="row" spacing={2}>
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
      </Stack>

      <Stack direction="row" spacing={2}>
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </Stack>
    </Stack>
  )
}
