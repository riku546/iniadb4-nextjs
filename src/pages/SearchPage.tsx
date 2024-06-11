import React from "react";
import styles from "../css/pageCss/SearchPage.module.css";
import Search from "@/components/Search";
import Selecter from "@/components/Selecter";
import NextLink from "next/link";
import UseSearchPage from "@/customHook/UseSearchPage";

const SearchPage = () => {
  const { categoryList, searchSuggests, Selectedcategory, setCategoryFn } =
    UseSearchPage();
  return (
    <div className={styles.container}>
      <div className={styles.searchArea}>
        <NextLink href="/">Homeに戻る</NextLink>

        <Selecter
          CategoryList={categoryList}
          handleChange={setCategoryFn}
          Selectedcategory={Selectedcategory}
        />

        <Search />
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
