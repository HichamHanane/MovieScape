import React, { useContext } from 'react'
import styles from './MovieCard.module.css';
import { MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MoviesContext } from '../../context/MoviesContex';

function MovieCard({movie}) {
    // let data = useContext(MoviesContext);
    
    return (
        <div className={styles.movie_card}>
            <img src={movie?.large_cover_image} width='300px' height="400px" alt="cover image" />
            <div className={styles.card_bottom}>
                <p className={styles.ratings}><MdStar />{movie?.rating}</p>
                <div className={styles.view_more}>
                    <Link to={`/movie/${movie?.id}`} className={styles.link}>View more</Link>
                    <IoIosArrowRoundForward color='white' />
                </div>
            </div>
        </div>
    )
}

export default MovieCard
