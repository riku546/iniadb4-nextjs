import NavList from "@/components/NavList";
import React from "react";
import styles from "../css/pageCss/questionPage.module.css";
import ContentList from "@/components/ContentList";
const progressPage = () => {
  return (
    <>
      <h1 className={styles.h1Tage}>進捗ページ</h1>
      <div className={styles.container}>
        <div className={styles.gridLayout}>
          <div className={styles.questionNavbar}>
            <NavList />
          </div>
          <ContentList text={"progress"} />
        </div>
      </div>
    </>
  )
}

export default progressPage
