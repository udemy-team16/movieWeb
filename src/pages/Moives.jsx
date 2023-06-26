import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "styles/Movies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Moives = () => {
    const {moviename} = useParams();     // url 파라미터 값을 가져옴
    const [movieInfo, setMovieInfo] = useState({});
    const [movieGenre, setMovieGenre] = useState('');

    useEffect(() => {
        const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`;
        fetch(url, {
            method: 'POST',
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'ok') {
                setMovieInfo(data.data.movies.filter(item => item.slug === moviename)[0]);

                const genreList = data.data.movies.filter(item => item.slug === moviename)[0].genres;
                setMovieGenre(genreList.length === 1 ? genreList : genreList.join(' / '));
            } else {
                alert('불러오기 실패');
            }
        })
        .catch(err => console.log(err));
    }, [])

    const backStyle = {
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0) 10%,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.5) 50%,
            rgba(20, 20, 20, 0.75) 75%,
            rgba(20, 20, 20, 1) 100%
        ), url(${movieInfo.background_image})`
    }

    return (
        <div className={styles.main}>
            <div className={styles.backImage} style={backStyle}></div>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.minContent}>
                <div className={styles.container}>
                    <div className={styles.poster}>
                        <img src={movieInfo.medium_cover_image} alt="" />
                    </div>
                    <div className={styles.info}>
                        <h1>{movieInfo.title}</h1>
                        <h2>{movieInfo.year}</h2>
                        <h2>{movieGenre}</h2>

                        <div className={styles.rating}>
                            <span className={styles.starIcon}><FontAwesomeIcon icon={faStar} /></span>
                            <h4>{movieInfo.rating} / <span>10</span></h4>
                        </div>

                        <div className={styles.movieDescription}>
                            <h4>Description</h4>
                            <p>{movieInfo.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moives;