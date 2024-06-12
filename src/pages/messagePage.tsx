import Hamburger from "@/components/Hamburger";
import UseHamburger from "@/customHook/UseHamburger";
import React, { useState } from "react";

const MessagePage = () => {
  const { isHamburger, setIsHamburger } = UseHamburger();
  const displayHamburger = () => {
    if (isHamburger) {
      return <Hamburger />;
    } else {
      return "rr";
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setIsHamburger((prev) => !prev);
          console.log("ff");
        }}
      >
        ボタン
      </button>
      {displayHamburger()}
    </>
  );
};

export default MessagePage;
