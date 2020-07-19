import React from 'react'
import {NavLink} from "react-router-dom";
import css from "./ShowMore.module.scss";

type PropsType  = {
    link: string
}

const ShowMore: React.FC<PropsType> = ({link}) => (
    <div>
        <NavLink to={link} className={`text-white ${css.showMore__link}`}>See more</NavLink>
    </div>
)

export default ShowMore