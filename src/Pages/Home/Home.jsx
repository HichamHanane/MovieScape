import React from 'react'
import styles from './Home.module.css'
import NavBar from '../../Components/NavBar/NavBar';
import HeroSection from '../../Components/HeroSection/HeroSection';
function Home() {
  return (
    <div className={styles.homePage}>
      <NavBar />
      <HeroSection />
    </div>
  )
}

export default Home;
