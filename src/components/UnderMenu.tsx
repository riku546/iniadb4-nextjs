import React from "react";
import HamburgerMenu from "./Hamburger";
import NextLink from "next/link";
import styles from "../css/UnderMunu.module.css"
const UnderMenu = () => {
  return (
    <div className={styles.underMenu}>
      <div>
        <HamburgerMenu />
      </div>
      <div>
        <NextLink href="./postPage">
          <img src="/icon2.png" alt="" width="100px" />
        </NextLink>
      </div>
    </div>
  );
};

export default UnderMenu;
