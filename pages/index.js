import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Surya Dukaan Portfolio</title>
        <meta name="surya Dukaan Portfolio" content="made by surya for applying for dukaan Frontend internship" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hi this is testing</h1>
      <div>
        Hi This is also just testing
      </div>
    </div>
  )
}
