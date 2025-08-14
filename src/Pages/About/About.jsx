import React from 'react'
import styles from './About.module.css'
import NavBar from '../../Components/NavBar/NavBar'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Footer from '../../Components/Footer/Footer'
function About() {
  return (
    <div className={styles.about_page}>
      <NavBar />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default About
