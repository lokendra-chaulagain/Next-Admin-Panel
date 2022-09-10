import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { Instance } from "@popperjs/core";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import OurStaffTopBar from "./OurStaffTopBar";

export default function OurStaffTableActionIcons() {
  const positionRef = React.useRef<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef<Instance>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <>
      <Tooltip
        title="Edit"
        placement="top"
        arrow
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current!.getBoundingClientRect().y,
                0,
                0
              );
            },
          },
        }}
      >
        <Box ref={areaRef} onMouseMove={handleMouseMove}>
          <ModeEditOutlineOutlinedIcon />
        </Box>
      </Tooltip>

      <Tooltip
        title="Delete"
        placement="top"
        arrow
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current!.getBoundingClientRect().y,
                0,
                0
              );
            },
          },
        }}
      >
        <Box ref={areaRef} onMouseMove={handleMouseMove}>
          <DeleteOutlinedIcon />
        </Box>
      </Tooltip>
    </>
  );
}
