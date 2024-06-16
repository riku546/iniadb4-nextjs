import AndroidIcon from "@mui/icons-material/Android";
import { useState } from "react";
import styles from "../css/ContentList.module.css";
import UseContentList from "@/customHook/UseContentList";

const ContentList = ({ text }) => {
  const { content, setContent } = UseContentList();

  return (
    <div className={styles.contentLists}>
      {content.map((row: { msg: String }, rowIndex: number) => (
        <div key={rowIndex} className={styles.contentList}>
          <AndroidIcon />

          <p className={styles.text}>{row.msg}</p>
        </div>
      ))}
      {text}
    </div>
  );
};

export default ContentList;
