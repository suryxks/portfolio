import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai'
import styles from './footer.module.css';
import utilStyles from '../../styles/utils.module.css';
import {socailProfiles} from '../../services/data'
import Link from 'next/link';
export const Footer = () => {
    const { github, linkedin } = socailProfiles;
    const twitterUrl = 'https://twitter.com/suryxks';
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h5>Lets Connect</h5>
                <a href={linkedin.url} target='_blank' rel="noreferrer"><AiFillLinkedin className={styles.icon} /></a>
                <a href={github.url} target='_blank' rel="noreferrer"><FaGithubSquare className={styles.icon} /></a>
                <a href={twitterUrl} target='_blank' rel="noreferrer"><FaTwitterSquare className={styles.icon}/></a>
          </div>
       </footer>)
}