import React from 'react'
import styles from "./Home.module.css"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>Expand your <br />
      <b>business</b>
      </p>
      <p>
        With the best <br />
      <b>online presence</b>
      </p>
      </div>
      <div className={styles.buttonsContainer}>
        <Link to="Contact" smooth duration={500} className={styles.callToAction}>Get in Touch</Link>
        <Link to="Contact" smooth duration={500} className={styles.callToAction}>Get a Quote</Link>
      </div>
    </div>
  )
}

export default Home