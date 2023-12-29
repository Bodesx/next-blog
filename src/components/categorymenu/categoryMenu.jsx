import React from 'react'
import Link from 'next/link'
import styles from './categoryMenu.module.css'

const categoryLIst = () => {
  return (
    <div className={styles.categoryList}>
<Link href='/blog?cat=fashion'className={`${styles.categoryItem}  ${styles.fashion}`}>Fashion</Link>
<Link href='/blog?cat=science'className={`${styles.categoryItem}  ${styles.science}`}>Science</Link>
<Link href='/blog?cat=tech'className={`${styles.categoryItem}  ${styles.tech}`}>Tech</Link>
<Link href='/blog?cat=food'className={`${styles.categoryItem}  ${styles.food}`}>Food</Link>
<Link href='/blog?cat=art'className={`${styles.categoryItem}  ${styles.art}`}>Art</Link>
<Link href='/blog?cat=gaming'className={`${styles.categoryItem}  ${styles.gaming}`}>Gaming</Link>
<Link href='/blog?cat=coding'className={`${styles.categoryItem}  ${styles.coding}`}>Coding</Link>
<Link href='/blog?cat=music'className={`${styles.categoryItem}  ${styles.music}`}>Music</Link>
<Link href='/blog?cat=travel'className={`${styles.categoryItem}  ${styles.travel}`}>Travel</Link>
<Link href='/blog?cat=life'className={`${styles.categoryItem}  ${styles.life}`}>Life</Link>
<Link href='/blog?cat=style'className={`${styles.categoryItem}  ${styles.style}`}>Style</Link>

  </div>
  
  )
}

export default categoryLIst
