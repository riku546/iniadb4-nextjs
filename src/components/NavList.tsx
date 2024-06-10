import React from "react";
import NextLink from "next/link";
import styles from "../css/NavList.module.css";
import HelpIcon from "@mui/icons-material/Help";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import FeedIcon from "@mui/icons-material/Feed";
const NavList = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.element}>
        <NextLink href="/" className={styles.link}>
          adBee
        </NextLink>
      </div>
      <div className={styles.element}>
        <HelpIcon />
        <NextLink href="./question" className={styles.link}>
          質問
        </NextLink>
      </div>
      <div className={styles.element}>
        <FeedIcon />
        <NextLink href="./explanation" className={styles.link}>
          解説
        </NextLink>
      </div>
      <div className={styles.element}>
        <EventRepeatIcon />
        <NextLink href="./progress" className={styles.link}>
          進捗
        </NextLink>
      </div>
      <div className={styles.element}>
        <EmailIcon />
        <NextLink href="./dmessage" className={styles.link}>
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
          <img src="/icon2.png" alt="" width="100px"/>
        </a>
      </div>
    </nav>
  );
};

export default NavList;
