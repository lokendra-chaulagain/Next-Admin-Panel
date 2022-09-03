import * as React from "react";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const navIcons = [
  {
    icon: <GridViewIcon />,
    label: "Dashboard",
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
    label: "Products",
  },
  {
    icon: <FormatListBulletedOutlinedIcon />,
    label: "Category",
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    label: "Customers",
  },

  {
    icon: <FactCheckOutlinedIcon />,
    label: "Orders",
  },

  {
    icon: <CardGiftcardOutlinedIcon />,
    label: "Coupons",
  },

  {
    icon: <Person3OutlinedIcon />,
    label: "Our Staff",
  },

  {
    icon: <SettingsOutlinedIcon />,
    label: "Setting",
  },
];

export default function LeftAppBar() {
  //   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 250,
        minWidth: 250,
        position: "fixed",
        bgcolor: "background.paper",
      }}
    >
      <List>
        {navIcons.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* expanded page */}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <AutoStoriesOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
    </Box>
  );
}
