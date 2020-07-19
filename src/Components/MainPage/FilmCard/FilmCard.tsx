import React from 'react'
import {FilmType} from "../../../redux/types";
import css from './FilmCard.module.scss'
import {NavLink} from "react-router-dom";

const FilmCard: React.FC<FilmType> = ({title, releaseYear, producerCountry, poster, ratingIMDB,
                                          ageRating, type, _id, genres,duration}) => {
    return <NavLink to={`/${type.toLowerCase()}s/${_id}`} className={css.filmCard}>
        <div className={css.filmCard__imgWrapper}>
            <img src={poster} alt=""/>
            <div className={css.filmCard__rating}>{ageRating}+</div>
            <div className={css.filmCard__details}>
                <p>{ratingIMDB.toFixed(1)} IMDb</p>
                <div style={{
                    'marginRight': 'auto',
                    'width': '90%',
                    'height': '5px',
                    'background': 'grey',
                    'borderRadius': '10px'
                }} ><div className={css.filmCard__line} style={{
                    'width': `${ratingIMDB * 10}%`,

                }} /></div>
                <p>{releaseYear}, {producerCountry} <br></br> {genres[0].title}<br></br>{duration} {type === 'Serial' ? 'seasons' : 'minutes'}</p>

            </div>
        </div>
        <div className={css.filmCard__description}>
            {title.slice(0, 16)}{title.length > 16 && '...'}
        </div>
    </NavLink>
}

export default FilmCard