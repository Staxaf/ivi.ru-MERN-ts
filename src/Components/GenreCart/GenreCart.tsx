import React from 'react'
import css from './GenreCart.module.scss'
import {NavLink} from "react-router-dom";

type GenreCartPropsType = {
    classIcon: string
    link: string
    title: string
}

const GenreCart: React.FC<GenreCartPropsType> = ({classIcon, title,link}) => (
    <NavLink to={`/${link}/${title.toLowerCase()}`} className={css.genreCart}>
        <div className={css.genreCart__iconWrapper}>
            <i className={classIcon} />
        </div>
        <p className={css.genreCart__name}>{title}</p>
    </NavLink>
)

export default GenreCart