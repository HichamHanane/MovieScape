import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <header>
      <div className={styles.logo}>
        <Link to='/' className={styles.logo}>MovieScape</Link>
      </div>
      <nav className={styles.navLinks}>
        <Link className={styles.navLink} to="/">Home</Link>
        <Link className={styles.navLink} to="/movies">Movies</Link>
        <Link className={styles.navLink} to="/about-us">About us</Link>
      </nav>
    </header>
  )
}

export default NavBar
