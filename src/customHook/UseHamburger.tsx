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
    { text: "search", icon: <SearchIcon /> , url:"./SearchPage"},
    { text: "Home", icon: <HomeIcon /> ,  url:"./index"},
    { text: "adBee" , url:"./AdBee" },
    { text: "質問", icon: <HelpIcon />  , url:"./questionPage"},
    { text: "解説", icon: <FeedIcon /> , url:"./CommentaryPage" },
    { text: "進捗", icon: <EventRepeatIcon /> , url:"./progressPage" },
    { text: "メッセージ", icon: <EmailIcon /> , url:"./messagePage" },
    { text: "マイページ", icon: <AccountBoxIcon /> , url:"./Profile"},
  ];
  return { isOpenHamburger, toggleHamburger, HamburgerList };
};

export default UseHamburger;
