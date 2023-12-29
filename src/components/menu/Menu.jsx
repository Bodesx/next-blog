import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menu.module.css'
import MenuPost from '../menuPost/menuPost'
import CategoryMenu from '../categorymenu/categoryMenu'

const Menu = () => {
  return (
 <div className={styles.container}>
  <h2 className={styles.subtitle}>{'whats hot'}</h2>
  <h1 className={styles.title}>most popular</h1>
   <MenuPost withImage={false}/>
 
  
 

<h2 className={styles.subtitle}>New topic</h2>
  <h1 className={styles.title}>Discover by Topic</h1>
  <CategoryMenu/>
   {/**editors pick */}  


 <h2 className={styles.subtitle}>{'cool stuff'}</h2>
  <h1 className={styles.title}>Editors Pick</h1>
  <div className={styles.items}>
   <MenuPost withImage={true}/>
     
  </div>
</div>
  )
}

export default Menu
