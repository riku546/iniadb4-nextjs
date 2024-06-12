import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import NextLink from "next/link";
import HelpIcon from "@mui/icons-material/Help";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import FeedIcon from "@mui/icons-material/Feed";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import styles from "../css/NavList.module.css";
import UseHamburger from "@/customHook/UseHamburger";

const Hamburger = () => {
  const { isOpenHamburger, changeState } = UseHamburger();
  return (
    <div id="outer-container">
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        isOpen={isOpenHamburger}
        onOpen={changeState}
        onClose={changeState}
      >
        <main id="page-wrap">
          <nav className={styles.nav}>
            <div className={styles.element}>
              <SearchIcon />
              <NextLink href="./SearchPage" className={styles.link}>
                search
              </NextLink>
            </div>
            <div className={styles.element}>
              <HomeIcon />
              <NextLink href="/" className={styles.link}>
                Home
              </NextLink>
            </div>
            <div className={styles.element}>
              <NextLink href="/AdBee" className={styles.link}>
                adBee
              </NextLink>
            </div>
            <div className={styles.element}>
              <HelpIcon />
              <NextLink href="./questionPage" className={styles.link}>
                質問
              </NextLink>
            </div>
            <div className={styles.element}>
              <FeedIcon />
              <NextLink href="./CommentaryPage" className={styles.link}>
                解説
              </NextLink>
            </div>
            <div className={styles.element}>
              <EventRepeatIcon />
              <NextLink href="./progressPage" className={styles.link}>
                進捗
              </NextLink>
            </div>
            <div className={styles.element}>
              <EmailIcon />
              <NextLink href="./messagePage" className={styles.link}>
                メッセージ
              </NextLink>
            </div>
            <div className={styles.element}>
              <AccountBoxIcon />
              <NextLink href="./Profile" className={styles.link}>
                マイページ
              </NextLink>
            </div>
            <div className={styles.postIcon}>
              <a href="./postPage">
                <img src="/icon2.png" alt="" width="100px" />
              </a>
            </div>
          </nav>
        </main>
      </Menu>
    </div>
  );
};

export default Hamburger;
