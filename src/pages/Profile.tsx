import UserInfo from '@/components/UserInfo'
import React from 'react'
import styles from "../css/Profile.module.css"
import NavList from '@/components/NavList'
import ContentList from '@/components/ContentList'

const profile = () => {
  return (
    
    <div className={styles.container}>
      <NavList/>

      <div className={styles.UserInfo}>

      < UserInfo/>
      <ContentList/>
      </div>
          


    </div>
  )
}

export default profile