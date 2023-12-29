import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './menuPost.module.css' 

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,);
  
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};



const menuPost = ({withImage}) => {
  return (
   <div className={styles.items}>
    <Link href="/" className={styles.item}>

     {withImage &&(  
  <div className={styles.imageContainer}>
    <Image src='/10.jpg'alt='' fill className={styles.image}></Image>
    </div>)} 

    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.travel}`}>Gaming</span>
    <h3>CoD game of the year </h3>
    <div className={styles.details}>
      <span className={styles.username}john ee></span>
      <span className={styles.date}>6.23.2023</span>
    </div>
     </div>
     </Link>

  <Link href="/" className={styles.item}>
     {withImage &&(  
  <div className={styles.imageContainer}>
    <Image src='/3.jpg'alt='' fill className={styles.image}></Image>
    </div>)}
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.fashion}`}>Science</span>
    <h3>crow the bird with incredible memory</h3>
    <div className={styles.details}>
      <span className={styles.username}john ee></span>
      <span className={styles.date}>8.3.2033</span>
    </div>
     </div>
     </Link>

      <Link href="/" className={styles.item}>
    {withImage &&(  
  <div className={styles.imageContainer}>
    <Image src='/8.jpg'alt='' fill className={styles.image}></Image>
    </div>)}
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.food}`}>Tech</span>
    <h3>Blue origin innovation </h3>
    <div className={styles.details}>
      <span className={styles.username}john ee></span>
      <span className={styles.date}>12.4.2023</span>
    </div>
     </div>
     </Link>

  <Link href="/" className={styles.item}>
    {withImage &&(  
  <div className={styles.imageContainer}>
    <Image src='/9.jpg'alt='' fill className={styles.image}></Image>
    </div>)}
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.coding}`}>music</span>
    <h3>best music of the 90s </h3>
    <div className={styles.details}>
      <span className={styles.username}john ee></span>
      <span className={styles.date}>12.23.2003</span>
    </div>
     </div>
     </Link>

      <Link href="/" className={styles.item}>
    {withImage &&(  
  <div className={styles.imageContainer}>
    <Image src='/6.jpg'alt='' fill className={styles.image}></Image>
    </div>)}
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.style}`}>coding</span>
    <h3>reacting to my tears </h3>
    <div className={styles.details}>
      <span className={styles.username}john ee></span>
      <span className={styles.date}>12.23.2003</span>
    </div>
     </div>
     </Link>

      <Link href="/" className={styles.item}>
    {withImage &&(  
  <div className={styles.imageContainer}>
    <Image src='/7.jpg'alt='' fill className={styles.image}></Image>
    </div>)}
    <div className={styles.textContainer}>
    <span className={`${styles.category} ${styles.culture}`}>art</span>
    <h3>Monalisa and her many lovers</h3>
    <div className={styles.details}>
      <span className={styles.username}john ee></span>
      <span className={styles.date}>12.23.2003</span>
    </div>
     </div>
     </Link>
     
     
  </div>




  )
}

export default menuPost
