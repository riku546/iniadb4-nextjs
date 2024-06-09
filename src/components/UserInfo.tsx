import React from "react";
import AndroidIcon from "@mui/icons-material/Android";
import styles from "../css/UserInfo.module.css";
const UserInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <AndroidIcon className={styles.icon} />
        <div>
          <div className={styles.nameAndLevel}>
            <b>Enoki</b>
            <p>Lv 10</p>
          </div>
          <div className={styles.follows}>
            <p>フォロ- 10</p>
            <p>フォロワー 10</p>
          </div>
        </div>
      </div>
      <ul className={styles.badges}>
        <li>8期生</li>
        <li>IGC2</li>
        <li>ArtWorks</li>
      </ul>
    </div>
  );
};

export default UserInfo;
