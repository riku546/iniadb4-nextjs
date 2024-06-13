import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import FeedIcon from "@mui/icons-material/Feed";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
const UseHamburger = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  const toggleHamburger = (newOpen: boolean) => () => {
    setIsOpenHamburger(newOpen);
  };
  const HamburgerList = [
    { text: "search", icon: <SearchIcon /> },
    { text: "Home", icon: <HomeIcon /> },
    { text: "adBee" },
    { text: "質問", icon: <HelpIcon /> },
    { text: "解説", icon: <FeedIcon /> },
    { text: "進捗", icon: <EventRepeatIcon /> },
    { text: "メッセージ", icon: <EmailIcon /> },
    { text: "マイページ", icon: <AccountBoxIcon /> },
  ];
  return { isOpenHamburger, toggleHamburger, HamburgerList };
};

export default UseHamburger;
