import Image from "next/image";
import { getProjectDetails } from "../../services/getProjectsDetails";
import styles from "../../styles/Projects.module.css";
import utilStyles from "../../styles/utils.module.css";
import { AppBar, NavBar } from "../../components";
import Link from "next/link";
export async function getStaticProps() {
  const projectDetails = getProjectDetails();
  return {
    props: {
      projects: [...projectDetails],
    },
  };
}
export default function Projects({ projects }) {
  return (
    <div className={styles.page_wrapper}>
      <AppBar />
      <div className={styles.projects_container}>
        {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.name}`}
              key={project.name}
              className={styles.projectWrapper}
            >
              <Image
                src={project.img}
                alt={project.name}
                width={270}
                height={180}
                className={styles.image}
              />
              <div className={styles.details}>
                <h3>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.linksContainer}>
                  <Link
                    href={`/projects/${project.name}`}
                    className={styles.btn_outline}
                  >
                    Learn more
                  </Link>
                  <a
                    href={project.websiteUrl}
                    className={styles.btn_filled}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.sidebar}>
        <h3
          className={`${utilStyles.text_md} ${styles.sidebar_content}`}
        >{`Projects  (${projects.length})`}</h3>
      </div>
      <NavBar />
    </div>
  );
}
