import NavList from "@/components/NavList";
import React from "react";
import styles from "../css/pageCss/ThreePage.module.css";
import ContentList from "@/components/ContentList";
import UnderMenu from "@/components/UnderMenu";

const CommentaryPage = () => {
  return (
    <>
      <h1 className={styles.h1Tage}>解説ページ</h1>
      <div className={styles.container}>
        <div className={styles.Navbar}>
          <NavList />
        </div>
        <div className={styles.contentLayout}>
          <ContentList text={"commentary"} />
        </div>
      </div>
      <div className={styles.underMenuLayout}>
        <UnderMenu />
      </div>
    </>
  );
};

export default CommentaryPage;
