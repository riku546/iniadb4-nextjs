import React from 'react'
import styles from "../css/pageCss/SearchPage.module.css"
import Search from '@/components/Search'
import Selecter from '@/components/Selecter'
const SearchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchArea}>
      <Selecter CategoryList={["質問" , "進捗" , "解説" ]}/>
      <Search />

      </div>

    </div>
  )
}

export default SearchPage
