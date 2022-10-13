import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import img from "../../public/6.jpg";
import Image from "next/image";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditEducationalExperience from "./EditEducationalExperience";

const datas = [
  {
    h1: "Creative Director 1",
    h2: "Miami, FL 1",
    h3: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },

  {
    h1: "Creative Director 2",
    h2: "Miami, FL 2",
    h3: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },

  {
    h1: "Creative Director 3",
    h2: "Miami, FL 3",
    h3: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
];

const EmployeeEducationCard = () => {
  return (
    <Box className="customCard" p={2} pb={5}>
      <Grid container justifyContent="space-between">
        <Typography variant="h5">Experience Information</Typography>
        <EditOutlinedIcon className="cp" />
      </Grid>

      <div>
        <VerticalTimeline>
          {datas.map((data, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work "
              //change line color
              contentStyle={{ background: "#16181d", color: "#bbc4cc", border: "2px solid #2d3741" }}
              contentArrowStyle={{ borderRight: "10px solid  #2d3741" }}
              date="2011 - present"
              iconStyle={{ background: "#16181d", color: "#bbc4cc" }}
              icon={<VisibilityIcon />}>
              <div className="d-flex justify-content-end">
                <EditEducationalExperience />
              </div>
              <h6 className="vertical-timeline-element-title">{data.h1}</h6>
              <h6 className="vertical-timeline-element-subtitle">{data.h2}</h6>
              <p>{data.h3}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </Box>
  );
};

export default EmployeeEducationCard;
