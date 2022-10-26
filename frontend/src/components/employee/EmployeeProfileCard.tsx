import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid, Typography, Avatar, Card, CardHeader, IconButton } from "@mui/material";

export default function EmployeeProfileCard({ employee }: any) {
  return (
    <>
      {employee &&
        employee.map((employee: any, index: any) => (
          <Card key={index} sx={{ minWidth: 480 }} className="customProfileCard mb-4 pb-3">
            <CardHeader
              action={
                <IconButton aria-label="settings" className="customTernaryTxtColor">
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Grid container direction="column" alignItems="center" justifyContent="center">
              <Avatar src="" alt="image" sx={{ width: 80, height: 80 }}>
                L
              </Avatar>
              <Typography variant="h6" className="customPrimaryTxtColor">
                {employee.fullName}
              </Typography>
              <Typography variant="subtitle1" className="customTernaryTxtColor">
                {employee.position}
              </Typography>
            </Grid>
          </Card>
        ))}
    </>
  );
}
