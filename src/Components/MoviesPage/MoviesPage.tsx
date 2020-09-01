import React, {Props, useEffect} from 'react'
import css from './MoviesPage.module.scss'
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import Slider from "../Common/Slider/Slider";
import {connect} from "react-redux";
import {getGenres} from "../../redux/main-reducer";
import {FilmType, GenreType} from "../../redux/types";
import {AppStateType} from "../../redux/redux-store";
import GenreCart from "../GenreCart/GenreCart";
import FilmCard from "../MainPage/FilmCard/FilmCard";
import {getBestFilms, getNewFilms} from "../../redux/multimedia-reducer";

type PropsType = {
    genres: Array<GenreType> | null
    newFilms: Array<FilmType> | null
    bestFilms: Array<FilmType> | null
    getGenres: () => void
    getNewFilms: () => void
    getBestFilms: () => void
}

const MoviesPage: React.FC<PropsType> = ({genres, newFilms,bestFilms, getGenres, getNewFilms, getBestFilms}) => {

    useEffect(() => {
        getGenres()
        getNewFilms()
        getBestFilms()
    }, [])
    return <div className={css.moviesPage}>
        <div className={css.breadcrumbs}>
            <NavLink className={css.breadcrumbs__link} to={'/'}>My ivi</NavLink>
            <span className={css.breadcrumbs__current}>Films</span>
        </div>
        <h1 className={"page-title"}>Watch films online</h1>
        <p className="page-description">
            Do you like to watch movies online and spend a lot of time scouring sites looking for something interesting? It is worth staying at ivi.ru - the films that we have collected will last for a long time. The collection is constantly updated with both new films and recognized masterpieces of the past! Regardless of who you are - a lover of energetic action films or a fan of youth series, the abundance of our catalog will make you forget about all other leisure activities, and you will watch your favorite movies online again and again!
        </p>
        <Slider title={'New Films'} slidesCount={7}
                items={newFilms && newFilms.map((newFilm, i) => <FilmCard key={i} {...newFilm} />)}
                link={'/films/all/new'}/>

        <Slider title={'Genres'} slidesCount={7} height={'100%'}
                items={genres && genres.map(genre => <GenreCart link={'films'} classIcon={genre.classIcon} title={genre.title}/>)}/>
        <Slider title={'Best Films by IMDB'} slidesCount={7}
                items={bestFilms && bestFilms.map((bestFilm, i) => <FilmCard key={i} {...bestFilm} />)}
                link={'/films/all/best'}/>
    </div>
}

type OwnPropsType = RouteComponentProps<null>

type MapStatePropsType = {
    genres: Array<GenreType> | null
    newFilms: Array<FilmType> | null
    bestFilms: Array<FilmType> | null
}

type mapDispatchToPropsType = {
    getGenres: () => void
    getNewFilms: () => void
    getBestFilms: () => void
}

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStatePropsType => ({
    genres: state.mainReducer.genres,
    newFilms: state.multimediaReducer.newFilms,
    bestFilms: state.multimediaReducer.bestFilms
})

export default withRouter(connect<MapStatePropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {getGenres, getNewFilms, getBestFilms})(MoviesPage))