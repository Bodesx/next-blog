import React from 'react'
import styles from './singlepage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/comments'


const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  return (
    <div className={styles.container}>
     <div className={styles.infoContainer}>
      <div className={styles.textContainer}>
        <h1>{data?.title}</h1>
        <div className={styles.user}>
         {data?.user?.image && <div className={styles.userImageContainer}>
             <Image src={data.user.image} alt="" fill className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={styles.username}><br /><strong>{data.user.name}</strong></span>
        <span className={styles.date}>  01.01.2089</span>
      </div>
          </div>
        </div>
     {(data?.img &&
      <div className={styles.imageContainer}>
        <Image src={data.img} alt="" fill className={styles.image}/>
      </div>)}
     </div>
     <div className={styles.content}>
      <div className={styles.post}>
        <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}} />

  
        
       <div className={styles.comments}>
        <Comments postSlug={slug}/>
       </div>
      </div>
      <Menu/>
     </div>
    </div>
  )
}

export default SinglePage
