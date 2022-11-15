import Link from "next/link";
import Image from "next/image";
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
        {section == "Projects" ? (
          <Image
            src="/projects.jpg"
            width={100}
            height={100}
            alt={section}
            className={styles.img}
          />
        ) : section == "Blogs" ? (
          <Image
            src="/blogs.jpg"
            width={100}
            height={100}
            alt={section}
            className={styles.img}
          />
        ) : (
          <Image
            src="/resume.jpg"
            width={100}
            height={100}
            alt={section}
            className={styles.img}
          />
        )}
      </div>
      <div>
        {section == "Projects" ? (
          <div className={styles.description}>
            <h3> Projects </h3>
            <p>
              I like to learn by building and breaking stuff, This is a
              collection of few projects that i have built.
            </p>
          </div>
        ) : section == "Blogs" ? (
          <div className={styles.description}>
            <h3> Blogs </h3>
            <p>
              I Share My learnings through blogs, This is a collection of Blogs I
              have published
            </p>
          </div>
        ) : (
          <div className={styles.description}>
            <h3> Resume </h3>
            <p> View and Download Resume </p>
          </div>
        )}
      </div>
    </Link>
  );
};
