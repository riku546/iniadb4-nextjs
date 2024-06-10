import React from "react";
import styles from "../css/UserPageContent.module.css";
import { ButtonGroup, Button } from "@mui/material";
const UserPageContent = () => {
  const contentCate = ["投稿", "自己紹介", "ユーザータグ"];
  return (
    <div>
      <div className={styles.categoryList}>
        {contentCate.map((category: string, categoryIndex: number) => (
          <Button variant="outlined" key={categoryIndex}>
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserPageContent;
