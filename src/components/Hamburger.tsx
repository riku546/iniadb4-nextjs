import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NextLink from "next/link";
import { styled } from "@mui/system";
import styles from "../css/Hamburger.module.css";

import UseHamburger from "@/customHook/UseHamburger";

const HamburgerMenu = () => {
  const { isOpenHamburger, toggleHamburger, HamburgerList } = UseHamburger();
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleHamburger(false)}
    >
      <List style={{ backgroundColor: "black" }}>
        {HamburgerList.map((HamburgerObject, index) => (
          <ListItem key={HamburgerObject.text} disablePadding>
            <NextLink
              href={HamburgerObject.url}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemButton>
                <ListItemIcon>{HamburgerObject.icon}</ListItemIcon>
                <ListItemText primary={HamburgerObject.text} />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleHamburger(true)}>
        <img src="/hamburger.png" alt="" width="100px" />
      </Button>
      <Drawer
        open={isOpenHamburger}
        onClose={toggleHamburger(false)}
        style={{ height: "100vh", backgroundColor: "black" }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
