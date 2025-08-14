import React, { useEffect, useState } from 'react'
import styles from './SimilarMovies.module.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function SimilarMovies({ genre }) {
    let [SimilarMovies, setSimilarMovie] = useState();
    let [isLoading, setIsloading] = useState(false);
    const navigate = useNavigate()

    const fetchSimilarMovies = async () => {
        let url = `https://yts.mx/api/v2/list_movies.json?genre=${genre}`
        try {
            setIsloading(true)
            const similar_movies = await axios.get(url);
            console.log('Response similar movies :', similar_movies);
            let get6Movies = similar_movies.data.data.movies.splice(0, 6);
            setSimilarMovie(get6Movies);
            setIsloading(false)

        } catch (error) {
            console.log('Error getting similar movies :', error);

        }
    }

    const renderSkeleton = () => {
        return Array.from({ length: 6 }).map((_, index) => (
            <div  className={styles.card_skeleton} width='300' height='400' />
        ));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchSimilarMovies()
    }, [genre])
    return (
        <section className={styles.section_similar_movies}>

            {
                isLoading
                    ? renderSkeleton()
                    :
                    SimilarMovies?.map((movie, index) => {
                        return (
                            <>
                                <Link to={`/movie/${movie?.id}`} >
                                    <img src={movie?.large_cover_image} alt="cover photo" className={styles.movie_card} width='300' height='400' />
                                </Link>

                            </>
                        )
                    })
            }
        </section>
    )
}

export default SimilarMovies
