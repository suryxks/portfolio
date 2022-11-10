import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { AppHeader, SectionCard } from "../components";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Surya Dukaan Portfolio</title>
        <meta
          name="surya Dukaan Portfolio"
          content="made by surya for applying for dukaan Frontend internship"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <div className={styles.blue_box}></div>
      <div className={styles.content}>
        
        <div className={styles.section_container}>
          <SectionCard section="Projects" />
          <SectionCard section="Blogs" />
          <SectionCard section="Resume" />
        </div>
      </div>
    </div>
  );
}
