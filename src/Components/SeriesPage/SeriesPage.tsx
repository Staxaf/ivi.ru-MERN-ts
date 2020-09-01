import React, {useEffect} from 'react'
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import {FilmType, GenreType} from "../../redux/types";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getGenres} from "../../redux/main-reducer";
import {getBestSerials, getNewSerials} from "../../redux/multimedia-reducer";
import css from "../MoviesPage/MoviesPage.module.scss";
import Slider from "../Common/Slider/Slider";
import FilmCard from "../MainPage/FilmCard/FilmCard";
import GenreCart from "../GenreCart/GenreCart";

type SeriesPagePropsType = {
    genres: Array<GenreType> | null
    newSerials: Array<FilmType> | null
    bestSerials: Array<FilmType> | null
    getGenres: () => void
    getNewSerials: () => void
    getBestSerials: () => void
}

const SeriesPage: React.FC<SeriesPagePropsType> = ({genres,newSerials,bestSerials,
                                                   getGenres, getNewSerials,getBestSerials}) => {
    useEffect(() => {
        getGenres()
        getNewSerials()
        getBestSerials()
    }, [])
    return <div className={css.moviesPage}>
        <div className={css.breadcrumbs}>
            <NavLink className={css.breadcrumbs__link} to={'/'}>My ivi</NavLink>
            <span className={css.breadcrumbs__current}>Serials</span>
        </div>
        <h1 className={"page-title"}>Watch serials online</h1>
        <p className="page-description">
            Many modern TV series are not much inferior to full-length films in terms of their entertainment and plot twists and turns. They grab your attention from the first episode and make you look forward to each next episode. So the seasons of the series fly by unnoticed for their viewers!        </p>
        <Slider title={'New Serials'} slidesCount={7}
                items={newSerials && newSerials.map((newSerial, i) => <FilmCard key={i} {...newSerial} />)}
                link={'/serials/all/new'}/>

        <Slider title={'Genres'} slidesCount={7} height={'100%'}
                items={genres && genres.map(genre => <GenreCart link={'serials'} classIcon={genre.classIcon} title={genre.title}/>)}/>
        <Slider title={'Best Serials by IMDB'} slidesCount={7}
                items={bestSerials && bestSerials.map((bestSerial, i) => <FilmCard key={i} {...bestSerial} />)}
                link={'/serials/all/best'}/>
    </div>
}


type OwnPropsType = RouteComponentProps<null>

type MapStatePropsType = {
    genres: Array<GenreType> | null
    newSerials: Array<FilmType> | null
    bestSerials: Array<FilmType> | null
}

type mapDispatchToPropsType = {
    getGenres: () => void
    getNewSerials: () => void
    getBestSerials: () => void
}

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStatePropsType => ({
    genres: state.mainReducer.genres,
    newSerials: state.multimediaReducer.newSerials,
    bestSerials: state.multimediaReducer.bestSerials
})

export default withRouter(connect<MapStatePropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {getGenres, getNewSerials, getBestSerials})(SeriesPage))