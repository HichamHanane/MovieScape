import React from 'react'
import styles from './Movie.module.css'
import NavBar from '../../Components/NavBar/NavBar'
import MovieDetails from '../../Components/MovieDetails/MovieDetails'
import { useParams } from 'react-router-dom'
function Movie() {
  const {id} = useParams()
  return (
    <div className={styles.movie_page}>
      <NavBar />
      
      <MovieDetails id={id}/>
    </div>
  )
}

export default Movie
