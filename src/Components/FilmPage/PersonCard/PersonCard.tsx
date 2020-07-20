import React from "react";
import css from './PersonCard.module.scss'
import {NavLink} from "react-router-dom";

type PropsType = {
    photoUrl: string,
    name: string,
    profession: string,
    id: string
}

const PersonCard: React.FC<PropsType> = ({photoUrl, profession, name, id}) => {
    return <NavLink to={`/persons/${id}`} className={css.personCard}>
        <div className={css.personCard__imgWrapper}>
            <img src={photoUrl} alt=""/>
        </div>
        <div className={css.personCard__name}>
            {name.split(' ')[0]} <br></br>
            {name.split(' ')[1]}
        </div>
        <div className={css.personCard__profession}>{profession}</div>
    </NavLink>
}

export default PersonCard