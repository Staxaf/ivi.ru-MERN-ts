import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import css from './MainPage.module.scss'
import {FilmType, PersonsType} from "../../redux/types";
import {AppStateType} from "../../redux/redux-store";
import {getCartoons, getFilms, getPersons, getSerials} from "../../redux/main-reducer";
import Slider from "../Common/Slider/Slider";
import FilmCard from "./FilmCard/FilmCard";
import Person from "./Person/Person";
import Loader from "../Common/Loader/Loader";

type PropsType = {
    persons: Array<PersonsType> | null
    films: Array<FilmType> | null
    cartoons: Array<FilmType> | null
    serials: Array<FilmType> | null
    getPersons: () => void
    getFilms: () => void
    getCartoons: () => void
    getSerials: () => void
}

const MainPage: React.FC<PropsType> = ({persons, films, cartoons, serials,
                                           getPersons, getFilms, getCartoons, getSerials}) => {
    useEffect(() => {
        getPersons()
        getFilms()
        getCartoons()
        getSerials()

    }, [])
    return <div className={css.main}>
        <Slider title={'Persons'} slidesCount={7}
                items={persons && persons.map((person, i) => <Person key={i} {...person} />)} link={'/persons'}/>
        <Slider title={'Films'} slidesCount={7}
                items={films && films.map((film, i) => <FilmCard key={i} {...film} />)} link={'/films'}/>
        <Slider title={'Cartoons'} slidesCount={7}
                items={cartoons && cartoons.map((cartoon, i) => <FilmCard key={i} {...cartoon} />)} link={'/cartoons'}/>
        <Slider title={'Serials'} slidesCount={7}
                items={serials && serials.map((serial, i) => <FilmCard key={i} {...serial} />)} link={'/serials'}/>
    </div>
}

type MapStatePropsType = {
    persons: Array<PersonsType> | null
    films: Array<FilmType> | null
    cartoons: Array<FilmType> | null
    serials: Array<FilmType> | null
}
type MapDispatchPropsType = {
    getPersons: () => void
    getFilms: () => void
    getCartoons: () => void
    getSerials: () => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    persons: state.mainReducer.persons,
    films: state.mainReducer.films,
    cartoons: state.mainReducer.cartoons,
    serials: state.mainReducer.serials
})


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {getPersons, getFilms, getCartoons, getSerials})(MainPage)