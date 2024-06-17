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

import UseHamburger from "@/customHook/UseHamburger";

const HamburgerMenu = () => {
  const { isOpenHamburger, toggleHamburger, HamburgerList } = UseHamburger();

  const DrawerList = (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleHamburger(false)}
    >
      <List>
        {HamburgerList.map((HamburgerObject, index) => (
          <ListItem key={HamburgerObject.text} disablePadding>
            <NextLink
              href={HamburgerObject.url}
              style={{
                textDecoration: "none",
                color: "black",
              }}
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
      <Drawer open={isOpenHamburger} onClose={toggleHamburger(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
