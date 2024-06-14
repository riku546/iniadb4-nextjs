import React from "react";
import HamburgerMenu from "./Hamburger";
import NextLink from "next/link";

const UnderMenu = () => {
  return (
    <>
      <div>
        <HamburgerMenu />
      </div>
      <div>
        <NextLink href="./postPage">
          <img src="/icon2.png" alt="" width="100px" />
        </NextLink>
      </div>
    </>
  );
};

export default UnderMenu;
