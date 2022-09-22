import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import AttendanceProgressBar from "./AttendanceProgressBar";

export default function AttendanceCard() {
  return (
    <Card variant="outlined" className="customCard ">
      <CardContent className="phc">
        <Typography variant="h5" component="div">
          Overall Attendance Performance
        </Typography>
        <AttendanceProgressBar />
      </CardContent>
    </Card>
  );
}
