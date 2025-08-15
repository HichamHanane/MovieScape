import React, { use, useContext, useEffect, useState } from 'react'
import styles from './MovieDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { IoMdStar } from 'react-icons/io'
import { MdDateRange, MdTimer } from 'react-icons/md'
import { AiOutlineGlobal } from 'react-icons/ai'
import { MoviesContext } from '../../context/MoviesContex'
import axios from 'axios'
import SimilarMovies from '../SimilarMovies/SimilarMovies'
function MovieDetails() {
    const { id } = useParams()
    const { data } = useContext(MoviesContext)
    var [isLoading, setIsloading] = useState(false)
    let [movie, setMovie] = useState({})

    const fetchMovieDetails = async () => {
        let url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        try {
            setIsloading(true)
            let movieDetails = await axios.get(url);
            console.log('Movie details :', movieDetails.data.data.movie);
            setMovie(movieDetails.data.data.movie)
            setIsloading(false)

        } catch (error) {
            console.log('Error while getting movie details... :', error);
        }
    }

    const displayMovieGategories = movie?.genres?.map((category, index) => {
        return <p className={styles.category} key={index}>{category}</p>

    })

    const renderSkeleton = () => {
        return (
            <>
                <aside className={styles.left_side_skeleton}></aside>
                <aside className={styles.right_side_skeleton}>
                    <div className={styles.title_skeleton}></div>
                    <div className={styles.statics_skeleton}>
                        <div className={styles.static_item_skeleton}></div>
                        <div className={styles.static_item_skeleton}></div>
                        <div className={styles.static_item_skeleton}></div>
                        <div className={styles.static_item_skeleton}></div>
                    </div>
                    <div className={styles.categories_skeleton}>
                        <div className={styles.category_item_skeleton}></div>
                        <div className={styles.category_item_skeleton}></div>
                        <div className={styles.category_item_skeleton}></div>
                    </div>
                    <div className={styles.description_skeleton}></div>
                    <div className={styles.watch_button_skeleton}></div>
                </aside>
            </>
        )
    }

    const formatRuntime = (runtimeInMinutes) => {
        if (!runtimeInMinutes || runtimeInMinutes === 0) {
            return "N/A";
        }
        const hours = Math.floor(runtimeInMinutes / 60);
        const minutes = runtimeInMinutes % 60;

        let formattedString = "";
        if (hours > 0) {
            formattedString += `${hours}h`;
        }
        if (minutes > 0) {
            formattedString += ` ${minutes}m`;
        }
        return formattedString.trim();
    };

    useEffect(() => {
        window.scrollTo(0, 0); 
        fetchMovieDetails()
    }, [id])
    return (
        <>
            <section className={styles.section_movie_details}>
                {
                    isLoading
                        ? renderSkeleton()
                        :
                        <>
                            <aside className={styles.left_side}>
                                <img src={movie?.large_cover_image} alt="cover photo" srcset="" />
                            </aside>
                            <aside className={styles.right_side}>
                                <h1 className={styles.title}>{movie?.title}</h1>
                                <div className={styles.statics}>
                                    <p className={styles.ratings}><IoMdStar color='#C9392F' /> {movie?.rating}</p>
                                    <p className={styles.time}><MdTimer color='#C9392F' /> {formatRuntime(movie?.runtime)}</p>
                                    <p className={styles.year}><MdDateRange color='#C9392F' /> {movie?.year} </p>
                                    <p className={styles.language}><AiOutlineGlobal color='#C9392F' /> {movie?.language} </p>
                                </div>
                                <div className={styles.categories}>
                                    {displayMovieGategories}
                                </div>
                                <p className={styles.description}>
                                    {
                                        movie?.description_full != "" ? movie?.description_full
                                            : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit consequuntur quia quae accusantium corrupti. Officia quidem, dignissimos blanditiis consequatur laudantium ab earum architecto sunt, ducimus excepturi pariatur provident fugit quaerat?'
                                    }
                                </p>
                                <Link to={`${movie?.url}`} className={styles.watch_button} target='_blank'>
                                    watch movie
                                </Link>
                            </aside>
                        </>
                }
            </section>
            {/* SIMILAR MOVIES */}
            <section className={styles.section_similar_movies}>
                <div className={styles.header_similar_movies}>
                    <h1>Similar Movies</h1>
                </div>
                {movie?.genres?.length > 0 && <SimilarMovies genre={movie?.genres[Math.floor(Math.random() * movie?.genres.length)]} />}
            </section>
        </>
    )
}

export default MovieDetails
