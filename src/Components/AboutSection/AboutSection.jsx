import React from 'react'
import styles from './AboutSection.module.css'
import Lottie from 'lottie-react'
import movie_animation from '../../assets/animations/Movie-animation.json'        
import { useNavigate } from 'react-router-dom'



function AboutSection() {
    const navigate = useNavigate()
  return (
    <section className={styles.section_about_us}>
      <div className={styles.left_side}>
        <h1 className={styles.healine}>Who We Are</h1>
        <span className={styles.slogan}>Helping you discover, explore, and enjoy.</span>
        <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque consectetur ut nam fugit atque eos, at et commodi, maxime sapiente provident repellendus aperiam libero dolores facere quae adipisci similique nisi.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque consectetur ut nam fugit atque eos, at et commodi, maxime sapiente provident repellendus aperiam libero dolores facere quae adipisci similique nisi.
        </p>
        <button className={styles.movies_button} onClick={()=> navigate('/movies')}>Browser Movies</button>
      </div>
      <div className={styles.right_side}>
        <Lottie animationData={movie_animation}  className={styles.lottieAnimation} />
      </div>
    </section>
  )
}

export default AboutSection
