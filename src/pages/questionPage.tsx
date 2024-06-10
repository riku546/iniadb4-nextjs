import NavList from "@/components/NavList";
import React from "react";
import styles from "../css/pageCss/questionPage.module.css";

const questionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.questionNavbar}>
        <NavList />
      </div>
    </div>
  );
};

export default questionPage;
