import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AppBar, NavBar } from "../../components";
import { HiArrowLeft } from "react-icons/hi";
import { getProjectPaths, getProject } from "../../services/getProjectsDetails";
import styles from "../../styles/project.module.css";
import utilStyles from "../../styles/utils.module.css";
export async function getStaticPaths() {
  const paths = getProjectPaths();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const projectDetails = getProject(params.id);
  return {
    props: {
      project: projectDetails[0],
    },
  };
}
export default function Project({ project }) {
  const { name, githubUrl, img, websiteUrl, description, techStack, details } =
    project;
  return (
    <div className={styles.page_container}>
      <AppBar />
      <Link href="/projects" className={styles.backLink}>
        <HiArrowLeft className={styles.backIcon} /> <h3> Projects </h3>
      </Link>
      <div className={styles.projectContainer}>
        <Image
          src={img}
          width={360}
          height={360}
          alt={name}
          className={styles.image}
        />
        <div className={styles.projectDetails}>
          <div>
            <h2>{name}</h2>
            <h3 className={styles.description}>{description}</h3>
            <ul className={styles.list}>
              {details?.map((detail) => (
                <li key={detail} className={styles.detail}>
                  {detail}
                </li>
              ))}
            </ul>
            <div className={styles.tech}>
              <span className={utilStyles.text_bold}>Tech Stack:</span>
              {techStack.map((tech) => (
                <span key={tech}>{` ${tech},`}</span>
              ))}
            </div>
          </div>
          <div className={styles.linksContainer}>
            <a href={githubUrl} className={styles.btn_outline}>
              <FaGithub />
              <span>Repository</span>
            </a>
            <a href={websiteUrl} className={styles.btn_filled}>
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}
