import React from 'react'
import CardList from '@/components/cardList/cardList'
import Menu from '@/components/menu/Menu'

import styles from './blogPage.module.css'

const BLogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  ); 
};

export default BLogPage
