import NavList from "@/components/NavList";
import React from "react";
import styles from "../css/pageCss/ThreePage.module.css";
import ContentList from "@/components/ContentList";
import UnderMenu from "@/components/UnderMenu";

const questionPage = () => {
  return (
    <>
      <h1 className={styles.h1Tage}>質問ページ</h1>
      <div className={styles.container}>
        <div className={styles.gridLayout}>
          <div className={styles.Navbar}>
            <NavList />
          </div>
          <div className={styles.contentLayout}>
            <ContentList text={"question"} />
          </div>
        </div>
      </div>
      <div className={styles.underMenu}>
        <UnderMenu />
      </div>
    </>
  );
};

export default questionPage;
