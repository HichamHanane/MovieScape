import React, { useContext, useEffect, useState } from 'react'
import styles from './MovieCardSlider.module.css'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MoviesContext } from '../../context/MoviesContex'

function MovieCardSlider() {
    let { data, isLoading } = useContext(MoviesContext)
    let [index, setIndex] = useState(0);
    const [slide, setSlide] = useState(true);

    const fiveMovies = data.slice(0, 5)

    // const movies = fiveMovies.map((movie, index) => {
    //     return (
    //         < >
    //             <div className={styles.cover_image}>
    //                 <img alt="Cover image" src={data[index]?.large_cover_image} loading='lazy' width="300px" height="400px" />
    //             </div>
    //             <div className={styles.view_more}>
    //                 <Link className={styles.view_more_button}>View more</Link>
    //                 <IoIosArrowRoundForward />
    //             </div>
    //         </>
    //     )
    // })
    useEffect(() => {
        const changeMovie = setInterval(() => {
            setSlide(false)

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % Math.min(data.length, 5));
                setSlide(true);
            }, 500);
        }, 3000)
        return () => clearInterval(changeMovie);
    }, [data , isLoading])

    const renderSkeletonCard = () => {
        return (
            <div className={`${styles.skeleton_card}`}>
                <div className={`${styles.skeleton_image} ${styles.shimmer}`}></div>

                <div className={styles.card_bottom_skeleton}>
                    <div className={`${styles.ratings} ${styles.skeleton_text} ${styles.shimmer}`}></div>

                    <div className={styles.view_more}>
                        <div className={`${styles.skeleton_link} ${styles.shimmer}`}></div>
                    </div>
                </div>
            </div>
        );
    };
    const currentMovie = fiveMovies[index];
    return (
        <>
            {
                isLoading ? renderSkeletonCard()
                    :
                    <div className={`${styles.movieCard} ${slide ? styles.slideIn : styles.slideOut
                        }`}>
                        <div className={`${styles.cover_image} `}>
                            <img alt="Cover image" src={currentMovie?.large_cover_image} loading='lazy' width="300px" height="400px" />
                        </div>
                        <div className={styles.view_more}>
                            <Link className={styles.view_more_button} to={`movie/${currentMovie?.id}`}>View more</Link>
                            <IoIosArrowRoundForward />
                        </div>
                    </div>
            }
        </>

    )
}

export default MovieCardSlider
