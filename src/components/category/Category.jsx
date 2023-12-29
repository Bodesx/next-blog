import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'



const getData = async ()=>{
  const res = await fetch('http://localhost:3000/api/categories',
  {
      cache: "force-cache",
    } ) 
  
 if(!res.ok){
  throw new Error('category error')
} 
return res.json()
}


const Category = async() => {
const data = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category
