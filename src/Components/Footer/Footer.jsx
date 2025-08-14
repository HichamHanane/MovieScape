import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <p>MovieScape</p>
      </div>
      <nav className={styles.navlinks}>
        <Link to='/' className={styles.link}>Home</Link>
        <Link to='/movies' className={styles.link}>Movies</Link>
        <Link to='/about-us' className={styles.link}>About us</Link>
      </nav>
    </footer>
  )
}

export default Footer
