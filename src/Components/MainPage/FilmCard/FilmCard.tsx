import React from 'react'
import {FilmType} from "../../../redux/types";
import css from './FilmCard.module.scss'
import {NavLink} from "react-router-dom";

interface PropsType extends FilmType  {
    textColor?: string
}

const FilmCard: React.FC<PropsType> = ({title, releaseYear, producerCountry, poster, ratingIMDB,
                                          ageRating, type, _id, genres,duration,textColor}) => {

    return <NavLink to={`/watch/${type.toLowerCase()}s/${_id}`} className={css.filmCard}>
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
                }} ><div className={"line"} style={{
                    'width': `${ratingIMDB * 10}%`,

                }} /></div>
                <p>{releaseYear}, {producerCountry} <br></br> {genres[0].title && genres[0].title}<br></br>{duration} {type === 'Serial' ? 'seasons' : 'minutes'}</p>

            </div>
        </div>
        <div className={css.filmCard__description} style={{'color': textColor ? textColor : 'white'}}>
            {title.slice(0, 16)}{title.length > 16 && '...'}
        </div>
    </NavLink>
}

export default FilmCard