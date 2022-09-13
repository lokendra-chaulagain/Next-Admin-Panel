import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
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
import { ExpandMore } from "@mui/icons-material";
import Stack from "@mui/material/Stack";

import Link from "next/link";

const navItems = [
  {
    icon: <GridViewIcon />,
    label: "Dashboard",
    route: "/",
  },
  {
    icon: <ShoppingBagOutlinedIcon />,
    label: "Products",
    route: "/product",
  },
  {
    icon: <FormatListBulletedOutlinedIcon />,
    label: "Category",
    route: "/category",
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    label: "Customers",
    route: "/customer",
  },

  {
    icon: <FactCheckOutlinedIcon />,
    label: "Orders",
    route: "/order",
  },

  {
    icon: <CardGiftcardOutlinedIcon />,
    label: "Coupons",
    route: "/coupon",
  },

  {
    icon: <SettingsOutlinedIcon />,
    label: "Setting",
    route: "/setting",
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
    <Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem  key={index} disablePadding>
            <Link href={item.route}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
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

        {/* Expanded Employees */}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <AutoStoriesOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link href={"/staffDetails"}>
                <ListItemText primary="Staff Details" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link href={"/allEmployees"}>
                <ListItemText primary="All Employees" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link href={"/leaves"}>
                <ListItemText primary="Leaves" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link href={"/performance"}>
                <ListItemText primary="Performance" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link href={"/allEmployees"}>
                <ListItemText primary="Overtime" />
              </Link>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link href={"/attendance"}>
                <ListItemText primary="Attendance" />
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
    </Box>
  );
}
