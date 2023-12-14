import Link from "next/link";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { FaPenNib } from "react-icons/fa";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
export const NavBar = () => {
  const { pathname } = useRouter();
  const isProjects = pathname.includes("projects");
  const isBlogs = pathname.includes("blogs");
  const isResume = pathname.includes("resume");
  return (
    <nav className={styles.container}>
      <ul className={styles.tab_container}>
        <li>
          <Link
            href="/projects"
            className={`${isProjects ? styles.active : ""} ${styles.tab}`}
          >
            <RiLightbulbFlashLine className={styles.icon} /> <h5> Projects </h5>
          </Link>{" "}
        </li>{" "}
        <li>
          <Link
            href="/blogs"
            className={`${isBlogs ? styles.active : ""} ${styles.tab}`}
          >
            <FaPenNib className={styles.icon} /> <h5> Blogs </h5>
          </Link>{" "}
        </li>{" "}
        <li>
          <Link
            href="/resume"
            className={`${isResume ? styles.active : ""} ${styles.tab}`}
          >
            <HiAcademicCap className={styles.icon} /> <h5> Resume </h5>
          </Link>{" "}
        </li>{" "}
      </ul>
    </nav>
  );
};
