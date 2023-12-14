import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilStyles from '../styles/utils.module.css'
import { AppHeader, SectionCard } from "../components";
import { Footer } from "../components";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Surya - dev</title>
        <meta
          name="surya Dukaan Portfolio"
          content="made by surya for applying for dukaan Frontend internship"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <div className={styles.blue_box}></div>
      <div className={styles.content}>
        <div className={styles.about}>
          <h1>Hi <span className={styles.wave}>👋</span>,<span className={utilStyles.link}>{`I'm Surya`}</span></h1>
          <p className={styles.aboutMe}>{"I'm a Frontend Engineer who loves to build beautiful User Interfaces with good UX"}</p>
        </div>
        <div className={styles.section_container}>
          <SectionCard section="Projects" />
          <SectionCard section="Blogs" />
          <SectionCard section="Resume" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
