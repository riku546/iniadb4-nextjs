import UserInfo from '@/components/UserInfo'
import React from 'react'
import styles from "../css/pageCss/Profile.module.css"
import NavList from '@/components/NavList'
import UserPageContent from '@/components/UserPageContent'

const profile = () => {
  return (
    
    <div className={styles.container}>
      <NavList/>

      <div className={styles.UserInfo}>

      < UserInfo/>
      <UserPageContent/>

      
      </div>
          


    </div>
  )
}

export default profile