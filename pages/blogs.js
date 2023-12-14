import styles from '../styles/blogs.module.css';
import utilStyles from '../styles/utils.module.css';
import { AppBar, NavBar } from "../components";
import { getBlogs } from '../services/getProjectsDetails';
export  async function getStaticProps() {
    const blogs = getBlogs();
    return {
        props: {
            blogs
        }
    }
}
export default function Blogs({blogs}) {
    return(<div className={styles.page_wrapper}>
        <AppBar/>
        <div  className={styles.blogs_container}>
          {blogs.map((blog) => (
            <div key={blog.title} className={styles.blogWrapper}>
           
              <div className={styles.details}>
                <h3>{blog.title}</h3>
                <p className={styles.description}>{blog.description}</p>
                <a href={blog.url} className={styles.link_btn} target="_blank" rel="noreferrer">Read more</a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.sidebar}>
          <h3 className={`${utilStyles.text_md} ${styles.sidebar_content}`}>{`Blogs  (${blogs.length})` }</h3>
        </div>
        <NavBar/>
      </div>)
}