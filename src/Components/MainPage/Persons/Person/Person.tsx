import React from 'react'
import css from './Person.module.scss'

type PropsType = {
    name: string
    profession: string
    gender: string
    photoUrl: string
}

const Person: React.FC<PropsType> = ({name, profession, gender, photoUrl}) => {
    return <div className={css.person}>
        <div className={css.person__imgWrapper}>
            <img className={css.person__img} src={photoUrl} alt=""/>
        </div>
        <div className={css.person__description}>
            {name.split(' ')[0]} <br></br>
            {name.split(' ')[1]}
        </div>
    </div>
}

export default Person