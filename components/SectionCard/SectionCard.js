import Link from "next/link";
import styles from "./sectionCard.module.css";
import utilStyles from "../../styles/utils.module.css";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { FaPenNib } from "react-icons/fa";

export const SectionCard = ({ section }) => {
  return (
    <Link href={`/${section.toLowerCase()}`} className={styles.section_link}>
      <div
        className={`${
          section == "Projects"
            ? `${styles.projects}`
            : section == "Blogs"
            ? `${styles.blogs}`
            : styles.resume
        } ${styles.section_Card}`}
      >
        {" "}
        <div className={styles.sectionDetails_wrapper}>
          {section == "Projects" ? (
            <RiLightbulbFlashLine className={styles.icon} />
          ) : section == "Blogs" ? (
            <FaPenNib className={styles.icon} />
          ) : (
            <HiAcademicCap className={`${styles.icon} ${styles.resume_icon}`} />
          )}

          <h1 className={`${utilStyles.text_lg} ${styles.section_title}`}>
            {section}
          </h1>
        </div>
      </div>
    </Link>
  );
};
