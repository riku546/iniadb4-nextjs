import React from "react";
import styles from "../css/pageCss/SearchPage.module.css";
import Search from "@/components/Search";
import Selecter from "@/components/Selecter";
import NextLink from "next/link";
import UseSearchPage from "@/customHook/UseSearchPage";
import { Grid } from "@mui/material";

const SearchPage = () => {
  const { categorys } = UseSearchPage();
  return (
    <div className={styles.container}>
      <div className={styles.searchArea}>
        <NextLink href="/">Homeに戻る</NextLink>

        <Selecter CategoryList={categorys} />
        <Search />
      </div>
      <div className={styles.SearchSuggests}>
        <Grid container spacing={2} columns={16} >
          <Grid item xs={8}>
            <h1>f</h1>
          </Grid>
          <Grid item xs={8}>
            <h1>f</h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SearchPage;
