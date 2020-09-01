import React, {useEffect} from 'react'
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import {FilmType, GenreType} from "../../redux/types";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getGenres} from "../../redux/main-reducer";
import {getBestCartoons, getNewCartoons} from "../../redux/multimedia-reducer";
import css from "../MoviesPage/MoviesPage.module.scss";
import Slider from "../Common/Slider/Slider";
import FilmCard from "../MainPage/FilmCard/FilmCard";
import GenreCart from "../GenreCart/GenreCart";

type CartoonsPagePropsType = {
    genres: Array<GenreType> | null
    newCartoons: Array<FilmType> | null
    bestCartoons: Array<FilmType> | null
    getGenres: () => void
    getNewCartoons: () => void
    getBestCartoons: () => void
}

const CartoonsPage: React.FC<CartoonsPagePropsType> = ({genres, newCartoons, bestCartoons,
                                                       getGenres, getNewCartoons, getBestCartoons}) => {
    useEffect(() => {
        getGenres()
        getNewCartoons()
        getBestCartoons()
    }, [])
    return <div className={css.moviesPage}>
        <div className={css.breadcrumbs}>
            <NavLink className={css.breadcrumbs__link} to={'/'}>My ivi</NavLink>
            <span className={css.breadcrumbs__current}>Cartoons</span>
        </div>
        <h1 className={"page-title"}>Watch cartoons online</h1>
        <p className="page-description">
            Want to watch cartoons online for free in good quality? Then you are welcome to our portal! We have collected for you the best cartoons made by outstanding Soviet, Russian and Hollywood animators. They will take you and your kids into the magical world of amazing adventures and fairy-tale characters. And also - they are guaranteed to cheer up and help to escape from routine everyday life.
        </p>
        <Slider title={'New Cartoons'} slidesCount={7}
                items={newCartoons && newCartoons.map((newCartoon, i) => <FilmCard key={i} {...newCartoon} />)}
                link={'/cartoons/all/new'}/>

        <Slider title={'Genres'} slidesCount={7} height={'100%'}
                items={genres && genres.map(genre => <GenreCart link={'cartoons'} classIcon={genre.classIcon} title={genre.title}/>)}/>
        <Slider title={'Best Cartoons by IMDB'} slidesCount={7}
                items={bestCartoons && bestCartoons.map((bestCartoon, i) => <FilmCard key={i} {...bestCartoon} />)}
                link={'/cartoons/all/best'}/>
    </div>
}


type OwnPropsType = RouteComponentProps<null>

type MapStatePropsType = {
    genres: Array<GenreType> | null
    newCartoons: Array<FilmType> | null
    bestCartoons: Array<FilmType> | null
}

type mapDispatchToPropsType = {
    getGenres: () => void
    getNewCartoons: () => void
    getBestCartoons: () => void
}

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStatePropsType => ({
    genres: state.mainReducer.genres,
    newCartoons: state.multimediaReducer.newCartoons,
    bestCartoons: state.multimediaReducer.bestCartoons
})

export default withRouter(connect<MapStatePropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {getGenres, getNewCartoons, getBestCartoons})(CartoonsPage))