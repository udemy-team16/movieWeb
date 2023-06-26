import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "styles/Main.module.css";
import noposter from "assets/images/noposter.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieList = ({movies}) => {
    const handleImgError = (e) => {
        e.target.src = noposter;
    }
    return (
        <div className={styles.movieAll}>
            {movies.map(item => (
                <div key={item.id} className={styles.movie}>
                    <figure>
                        <img className={styles.imgResponsive} src={item.medium_cover_image} alt="" onError={handleImgError}/>
                        <figcaption className={styles.figTag}>
                            <span className={styles.starIcon}><FontAwesomeIcon icon={faStar} /></span>
                            <h4>{item.rating} / 10</h4> <h4>{item.genres[0]}</h4>
                            <button><Link to={`/movies/${item.slug}`}>View Details</Link></button>
                        </figcaption>
                    </figure>
                    <p className={styles.movieTitle}><Link to={`/movies/${item.slug}`}>{item.title}</Link></p>
                    <p className={styles.movieYear}>{item.year}</p>
                </div>
            ))}
        </div>
    )
}

const Main = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
        fetch(url, {
            method: 'POST',
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'ok') {
                setMovieList(...movieList, data.data.movies);
            } else {
                alert('불러오기 실패');
            }
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div className={styles.mainUP}>            
            <main className={styles.main}>
                <section className={styles.container}>
                    <MovieList movies={movieList}/>
                </section>
            </main>
        </div>
    );
};

export default Main;