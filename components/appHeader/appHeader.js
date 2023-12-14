import Link from "next/link";
import styles from "./appHeader.module.css";
export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <h1 className={`${styles.text_lg} ${styles.header_title}`}>
          <Link href="/">Surya</Link>
        </h1>
        <nav>
          <ul className={styles.pageLinks}>
            <li className={`${styles.text_md}`}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={styles.text_md}>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className={styles.text_md}>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
