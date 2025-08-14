import React from 'react'
import styles from './Pagenation.module.css'
function Pagination({ moviePerPage, totalMovies, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.pagination_nav}>
            <ul className={styles.pagination_list}>
                {pageNumbers.map(number => (
                    <li key={number} className={styles.pagination_item}>
                        <p onClick={() => paginate(number)} className={styles.pagination_link}>
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination
