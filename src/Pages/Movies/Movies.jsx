import React from 'react'
import styles from './Movies.module.css'
import NavBar from '../../Components/NavBar/NavBar'
import MoviesSection from '../../Components/MoviesSection/MoviesSection'
import Footer from '../../Components/Footer/Footer'
function Movies() {
  return (
    <div className={styles.movies_page}>
      <NavBar />
      <MoviesSection />
      <Footer/>
    </div>
  )
}

export default Movies
