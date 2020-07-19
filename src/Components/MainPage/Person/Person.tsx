import React from 'react'
import css from './Person.module.scss'
import {FilmType} from "../../../redux/types";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    profession: string
    gender: string
    photoUrl: string,
    films: Array<FilmType>
    _id: string
}

const Person: React.FC<PropsType> = ({name, profession, gender, photoUrl, films, _id}) => {
    return <NavLink to={`/persons/${_id}`} className={css.person}>
        <div className={css.person__imgWrapper}>
            <img className={css.person__img} src={photoUrl} alt=""/>
            <div className={`${css.person__counter} text-white`}>{films.length}</div>
        </div>
        <div className={`${css.person__description} text-white`}>
            {name.split(' ')[0]} <br></br>
            {name.split(' ')[1]}
        </div>
        <p className={css.person__films}>{films.length} movies</p>
    </NavLink>
}

export default Person