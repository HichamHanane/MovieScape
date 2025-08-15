import React, { useState } from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
function NavBar() {
  let [openMenu , setOpenMenu] = useState(false)


  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <header>
        <div className={styles.logo}>
          <Link to='/' className={styles.logo}>MovieScape</Link>
        </div>
        <nav className={styles.navLinks}>
          <Link className={styles.navLink} to="/">Home</Link>
          <Link className={styles.navLink} to="/movies">Movies</Link>
          <Link className={styles.navLink} to="/about-us">About us</Link>
        </nav>

        <div className={styles.burger_menu}>
          {
            openMenu ? <MdClose className={styles.burger_icon} onClick={()=>handleOpenMenu()}/> : <GiHamburgerMenu className={styles.burger_icon} onClick={()=>handleOpenMenu()}/>
          }
          
        </div>


      </header>
      <nav className={styles.responsive_menu} style={{display:openMenu ?`flex` :'none'}}>
        <Link className={styles.responsive_navlink} to="/">Home</Link>
        <Link className={styles.responsive_navlink} to="/movies">Movies</Link>
        <Link className={styles.responsive_navlink} to="/about-us">About us</Link>
      </nav>
    </>

  )
}

export default NavBar
