import React from 'react'
import styles from "../css/pageCss/SearchPage.module.css"
import Search from '@/components/Search'
const SearchPage = () => {
  return (
    <div className={styles.container}>
      <Search/>
    </div>
  )
}

export default SearchPage
