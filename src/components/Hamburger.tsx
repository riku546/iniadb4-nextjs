import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UseHamburger from "@/customHook/UseHamburger";

const HamburgerMenu = () => {
  const { isOpenHamburger, toggleHamburger, HamburgerList } = UseHamburger();
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleHamburger(false)}
    >
      <List>
        {HamburgerList.map((HamburgerObject, index) => (
          <ListItem key={HamburgerObject.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{HamburgerObject.icon}</ListItemIcon>
              <ListItemText primary={HamburgerObject.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Button onClick={toggleHamburger(true)}>Open drawer</Button>
      <Drawer open={isOpenHamburger} onClose={toggleHamburger(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
