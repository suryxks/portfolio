import { AppBar, NavBar } from "../components";
import styles from "../styles/resume.module.css";
import utilStyles from "../styles/utils.module.css";
import {
  getProjectDetails,
  getBlogs,
  getProfiles,
} from "../services/getProjectsDetails";
export default function Resume() {
  let projects = getProjectDetails();
  projects = projects.filter((project) => project.name !== "Lift-Simulation");
  const blogs = getBlogs();
  const profiles = getProfiles();
  const { github, portfolio, linkedin } = profiles;
  const fileUrl =
    "https://drive.google.com/u/0/uc?id=1mw6j58PCbSJXzLPOX0BeyLrE0TE-b0Ru&export=download";
  const fileName = "surya_frontend_dev.pdf";
  return (
    <div className={styles.page_wrapper}>
      <AppBar />
      <div className={styles.page_container}>
        <div className={styles.resume}>
          <section className={styles.resume_header}>
            <address>
              <p>{"(+91) 9443125027"}</p>
              <p>{"Vellore,Tamilnadu"}</p>
              <a
                href="mailto:suryasuresh9876543@gmail.com"
                className={utilStyles.link}
              >
                suryasuresh9876543@gmail.com
              </a>
            </address>
            <h1 className={styles.name}>{"SURYA K S"}</h1>
            <div className={styles.links_container}>
              <a
                href={portfolio.url}
                className={utilStyles.link}
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>

              <a
                href={github.url}
                className={utilStyles.link}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={linkedin.url}
                className={utilStyles.link}
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </section>
          <hr />
          <section>
            <h4 className={styles.section_title}>SKILLS</h4>
            <hr />
            <div className={styles.skills}>
              <h5>Tools and Languages</h5>
              <p>
                Javascript,HTML,CSS,React.js,styled components,Redux,
                jest,Typescript,React Testing library
              </p>
            </div>
          </section>

          <section>
            <h4 className={styles.section_title}>Projects</h4>
            <hr />
            <div className={styles.projects}>
              {projects.map((project) => {
                const {
                  name,
                  githubUrl,
                  img,
                  websiteUrl,
                  description,
                  techStack,
                  details,
                } = project;
                return (
                  <div key={name} className={styles.project_details}>
                    <a
                      href={websiteUrl}
                      className={`${utilStyles.link} ${utilStyles.text_bold}`}
                    >
                      {name}
                    </a>
                    <a href={githubUrl} className={`${utilStyles.link}`}>
                      code
                    </a>
                    <ul className={styles.list_container}>
                      {details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                      <li>
                        <span className={utilStyles.text_bold}>
                          Tech Stack:
                        </span>
                        {techStack.map((tech) => (
                          <span key={tech}>{`${tech}, `}</span>
                        ))}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h4 className={styles.section_title}>TECHNICAL BLOGS</h4>
            <hr />
            <div className={styles.blog_wrapper}>
              {blogs.map((blog) => (
                <div key={blog.title} className={styles.blog}>
                  <a href={blog.url} className={utilStyles.link}>
                    {blog.title}
                  </a>
                  <span>{blog.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className={styles.section_title}>EDUCATION</h4>
            <hr />
            <div className={styles.education}>
              <p>
                <span className={utilStyles.text_bold}>
                  B.Tech,Electronics and Communication Engineering
                </span>
                , Sastra Deemed University
              </p>
              <span>Jul 2019-Present</span>
            </div>
          </section>
        </div>

        <div className={styles.download_wrapper}>
          <a
            href={fileUrl}
            download={fileName}
            role="button"
            className={styles.download_btn}
          >
            Download Resume
          </a>
        </div>
          </div>
          <NavBar/>
    </div>
  );
}
