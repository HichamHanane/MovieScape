import React, { useContext, useState } from 'react'
import styles from './MoviesSection.module.css'
import { CiSearch } from 'react-icons/ci'
import MovieCard from '../MovieCard/MovieCard'
import { MoviesContext } from '../../context/MoviesContex';
import Pagination from '../Pagenation/Pagination';
import { MdOutlineRemoveCircleOutline } from 'react-icons/md';

function MoviesSection() {
    let { data, isLoading } = useContext(MoviesContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviePerPage] = useState(9);
    let [searchMovie, setSearchMovie] = useState("")

    const renderSkeletonCards = () => {
        return Array.from({ length: 6 }).map((_, index) => (
            <div className={`${styles.skeleton_card}`} key={index}>
                <div className={`${styles.skeleton_image} ${styles.shimmer}`}></div>

                <div className={styles.card_bottom_skeleton}>
                    <div className={`${styles.ratings} ${styles.skeleton_text} ${styles.shimmer}`}></div>

                    <div className={styles.view_more}>
                        <div className={`${styles.skeleton_link} ${styles.shimmer}`}></div>
                    </div>
                </div>
            </div>
        ));
    };


    const indexOfLastMovie = currentPage * moviePerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;
    var filterMovie;

    if (searchMovie == "") {
        filterMovie = data
    }
    else {
        filterMovie = data?.filter((movie) => movie?.title.toUpperCase() == searchMovie.toUpperCase());

    }
    const currentMovies = filterMovie?.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const displayMovies = currentMovies?.map((movie, index) => {
        return <MovieCard movie={movie} key={index} />
    })

    const NoResults = () => {
        return (
            <div className={styles.noResultsContainer}>
                <div className={styles.noResultsContent}>
                    <span className={styles.icon} role="img" aria-label="crying face">
                        <MdOutlineRemoveCircleOutline color='#C9392F'/>
                    </span>
                    <h2 className={styles.heading}>Oops!</h2>
                    <p className={styles.message}>Sorry, no results found.</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <section className={styles.section_movies}>
                <div className={styles.header}>
                    <h1 className={styles.headline}>Your Movie World, Your Rules</h1>
                    <p className={styles.slogan}>Choose, watch, and enjoy on your terms.</p>
                </div>
                <div className={styles.search_bar}>
                    <input type="text" name='name' placeholder='Enter a movie...' enterKeyHint='enter' onChange={(e) => { setSearchMovie(e.target.value) }} />
                    <CiSearch className={styles.search_icon} />
                </div>
                <div className={styles.movie_card_container}>
                    {
                        isLoading
                            ? renderSkeletonCards()
                            : currentMovies.length === 0
                                ? NoResults()
                                : displayMovies
                    }

                </div>

            </section>
            <Pagination
                moviePerPage={moviePerPage}
                totalMovies={filterMovie == "" ? data?.length : filterMovie?.length}
                paginate={paginate}
            />
        </>
    )
}

export default MoviesSection
