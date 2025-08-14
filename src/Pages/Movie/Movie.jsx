import React from 'react'
import styles from './Movie.module.css'
import NavBar from '../../Components/NavBar/NavBar'
import MovieDetails from '../../Components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Footer from '../../Components/Footer/Footer'

function Movie() {
  return (
    <div className={styles.movie_page}>
      <NavBar /> 
      <MovieDetails />
      <Footer />
    </div>
  )
}

export default Movie
