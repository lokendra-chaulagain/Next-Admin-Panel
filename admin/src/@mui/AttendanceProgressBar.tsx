import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Avatar,
  LinearProgress,
  LinearProgressProps,
} from "@mui/material";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box>
        <Avatar>L</Avatar>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          {props.value}%
        </Typography>
      </Box>
    </Box>
  );
}

export default function AttendanceProgressBar() {
  const [progress, setProgress] = React.useState(20);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
