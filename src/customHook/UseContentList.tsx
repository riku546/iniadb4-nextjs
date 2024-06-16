import React, { useState } from "react";

const UseContentList = () => {
  const [content, setContent] = useState([
    {
      msg: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      userName: "enoki",
    },
    { msg: "aaaaaaaaaaaaaaaaaaaaaaaa", userName: "enoki" },
    { msg: "aaaaaaaaaaaaaaaaaaaaaaaa", userName: "enoki" },
    { msg: "aaaaaaaaaaaaaaaaaaaaaaaa", userName: "enoki" },
  ]);

  return {
    content,
    setContent,
  };
};

export default UseContentList;
