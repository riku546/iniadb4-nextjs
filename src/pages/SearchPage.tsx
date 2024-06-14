import React from "react";
import styles from "../css/pageCss/SearchPage.module.css";
import Search from "@/components/Search";
import Selecter from "@/components/Selecter";
import NextLink from "next/link";
import UseSearchPage from "@/customHook/UseSearchPage";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const SearchPage = () => {
  const { categoryList, searchSuggests, Selectedcategory, setCategoryFn } =
    UseSearchPage();
  return (
    <div className={styles.container}>
      <div className={styles.searchArea}>
        <div className={styles.flexLayout}>
          <div className={styles.arrowCircleLeftIcon}>
            <NextLink href="/">
              <ArrowCircleLeftIcon />
            </NextLink>
          </div>
          <div className={styles.searchBox}>
            <Search />
          </div>
        </div>
        <div>
          <Selecter
            CategoryList={categoryList}
            handleChange={setCategoryFn}
            Selectedcategory={Selectedcategory}
          />
        </div>
      </div>

      <div className={styles.SearchSuggests}>
        <b>検索候補タグ</b>
        <div className={styles.gridLayout}>
          {searchSuggests[Selectedcategory].map(
            (category: String, categoryIndex: number) => (
              <p key={categoryIndex} className={styles.categoryTag}>
                {category}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
