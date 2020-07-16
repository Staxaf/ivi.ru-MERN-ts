import React, {useState, useEffect} from 'react'
import css from './Persons.module.scss'
import Person from "./Person/Person";
import Slider from "../../Common/Slider/Slider";
import {NavLink} from 'react-router-dom'
import {PersonsType} from "../../../redux/types";

type PropsType = {
    persons?: Array<PersonsType> | null
}

const Persons: React.FC<PropsType> = ({persons}: PropsType) => {

    return <div className={`text-white d-flex ${css.persons}`}>
        {persons && <Slider title={'Persons'} slidesCount={7} items={persons.map((person, i) => <Person key={i} {...person} />)} >
            <div><NavLink to={'/persons'} className={`text-white ${css.persons__link}`}>See more</NavLink></div>
        </Slider>}
    </div>
}

export default Persons