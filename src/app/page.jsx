
import Features from "../components/features/Features";
import styles from "./homepage.module.css";
import Link from "next/link"
import CardList from "@/components/cardList/cardList";
import Menu from "@/components/menu/Menu";
import Category from "@/components/category/Category";

 

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Features />
      <Category />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}
