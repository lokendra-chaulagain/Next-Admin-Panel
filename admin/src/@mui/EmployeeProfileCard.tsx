import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardHeader,
  IconButton,
} from "@mui/material";

export default function EmployeeProfileCard() {
  return (
    <Card sx={{ maxWidth: 380, minWidth: 380 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar src="" alt="image" sx={{ width: 80, height: 80 }}>
          L
        </Avatar>
        <Typography variant="h6">Lokendra Chaulagain</Typography>
        <Typography variant="subtitle1">WebApp Developer</Typography>
      </Grid>
    </Card>
  );
}
