import React from 'react'
import { useState } from 'react'

const UseHamburger = () => {
  const [isOpenHamburger , setIsOpenHamburger] = useState<boolean>(false)

  const changeState = () =>{
      setIsOpenHamburger((prev)=> !prev)
 
  }

return {isOpenHamburger , changeState}
}

export default UseHamburger
