import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import styles from "./appBar.module.css";
import utilStyles from "../../styles/utils.module.css";

import { NavBar } from "../navbar/navbar";
export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.name}>
        <h1 className={`${utilStyles.text_lg}`}> Surya </h1>{" "}
      </Link>
      <div className={styles.searchBar}>
        <FiSearch className={styles.search_icon} />{" "}
        <input
          type="text"
          value="The Frontend Engineer You are looking for"
          readOnly
        />
      </div>
      <NavBar />
    </header>
  );
};
