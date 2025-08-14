import React, { useContext } from 'react'
import styles from './HeroSection.module.css'
import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs'
import MovieCardSlider from '../MoviesSlider/MovieCardSlider'
import { MoviesContext } from '../../context/MoviesContex'
import { useNavigate } from 'react-router-dom'

function HeroSection() {
  let data = useContext(MoviesContext);
  const navigate = useNavigate()
  return (
    <section className={styles.sectionHero}>
      <aside className={styles.leftSide}>
        <h1>Your Next Favorite Movie Awaits</h1>
        <p className={styles.slogan}>Discover. Watch. Repeat. Dive into a world of stories.</p>
        <button className={styles.movies_button} onClick={()=> navigate('/movies')}>Browser Movies</button>
        {/* <div className={styles.social_media}>
            <BsFacebook  className={styles.icon}/>
            <BsInstagram  className={styles.icon}/>
            <BsTwitterX  className={styles.icon}/>
        </div> */}
      </aside>
      <aside className={styles.RightSide}>
        <MovieCardSlider data={data}/>
      </aside>
    </section>
  )
}

export default HeroSection
