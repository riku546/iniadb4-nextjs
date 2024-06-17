import React, { useState } from "react";
import styles from "../css/pageCss/Profile.module.css";
import NavList from "@/components/NavList";
import AndroidIcon from "@mui/icons-material/Android";
import { Button } from "@mui/material";
import UseProfile from "@/customHook/UseProfile";
import UnderMenu from "@/components/UnderMenu";

const profile = () => {
  const { contentCate, setDisplayMode, displayContent } = UseProfile();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <NavList />
        </div>

        <div className={styles.UserInfo}>
          <div className={styles.UserInfoContainer}>
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
        </div>
      </div>
      <div className={styles.underMenu}>
        <UnderMenu />
      </div>
    </>
  );
};

export default profile;
