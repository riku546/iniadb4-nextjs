import React, { useState } from "react";
import styles from "../css/UserPageContent.module.css";
import { ButtonGroup, Button } from "@mui/material";
import ContentList from "./ContentList";
const UserPageContent = () => {
  const contentCate = ["投稿", "自己紹介", "ユーザータグ"];
  const [displayMode, setDisplayMode] = useState("投稿");
  const displayContent = () => {
    switch (displayMode) {
      case "投稿":
        return <ContentList text={"投稿"} />;
      case "自己紹介":
        return <ContentList text={"自己紹介"} />;
      case "ユーザータグ":
        return <ContentList text={"ユーザータグ"} />;
    }
  };

  return (
    <div>
      <div className={styles.categoryList}>
        {contentCate.map((category: string, categoryIndex: number) => (
          <Button
            variant="outlined"
            key={categoryIndex}
            style={{ borderColor: "orange", color: "orange" }}
            onClick={() => setDisplayMode(contentCate[categoryIndex])}
          >
            {category}
          </Button>
        ))}
      </div>
      {displayContent()}
    </div>
  );
};

export default UserPageContent;
