import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../css/search.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchForm}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <input type="text" placeholder="@" className={styles.input} />
      </div>
    </div>
  );
};

export default Search;
