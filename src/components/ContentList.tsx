import AndroidIcon from "@mui/icons-material/Android";
import { useState } from "react";
import styles from "../css/ContentList.module.css";

const ContentList = ({ text }) => {
  const [list, setList] = useState([
    {
      msg: "aaaaaaaaaaaaaaaaaaaaaaaa",
    },
    { msg: "aaaaaaaaaaaaaaaaaaaaaaaa" },
    { msg: "aaaaaaaaaaaaaaaaaaaaaaaa" },
    { msg: "aaaaaaaaaaaaaaaaaaaaaaaa" },
  ]);

  return (
    <div className={styles.contentLists}>
      {list.map((row: { msg: String }, rowIndex: number) => (
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
