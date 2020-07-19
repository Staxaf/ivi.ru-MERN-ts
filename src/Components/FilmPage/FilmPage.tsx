import React, {useEffect} from "react";
import css from './FilmPage.module.scss'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getMultimediaByID} from "../../redux/multimedia-reducer";
import {RouteComponentProps} from 'react-router-dom'
import {FilmType} from "../../redux/types";
import Loader from "../Common/Loader/Loader";

type PropsType = {
    id: string
    multimedia: FilmType | null
    getMultimediaByID: (id: string) => void
}

const FilmPage: React.FC<PropsType>= ({id,multimedia, getMultimediaByID}) => {
    useEffect(() => {
        getMultimediaByID(id)
    }, [])
    return <div className={css.filmPage}>
        {multimedia ? <div className={css.filmPage__container}>
            <div className={css.filmPage__imgWrapper}>
                <img src={multimedia.poster} alt=""/>
            </div>
            <div style={{'marginLeft': '30px'}}>
                <h1 className={css.filmPage__title}>{multimedia.title}</h1>
                <div className={"d-flex justify-content-between"}>
                    <p className={css.filmPage__underTitle}>{multimedia.type}</p>
                    <p className={css.filmPage__underTitle}>{multimedia?.ageRating}+</p>
                </div>
                <div className={css.filmPage__details}>
                    {multimedia.releaseYear}, {multimedia.producerCountry}, {multimedia.genres.map(genre => `${genre.title} `)}
                    <i className={`${css.filmPage__icon} fas fa-photo-video`} /> {multimedia.duration} {multimedia.type === 'Serial' ? 'seasons' : 'minutes'}
                    <br></br>Actors: {multimedia?.actors.slice(0, 3).map(actor => `${actor.name} `)}
                </div>
            </div>
        </div> : <Loader />}
    </div>
}

type OwnPropsType = RouteComponentProps<{id: string}>

type MapStatePropsType = {
    id: string,
    multimedia: FilmType | null
}

type mapDispatchToPropsType = {
    getMultimediaByID: (id: string) => void
}

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStatePropsType =>  ({
    id: ownProps.match.params.id,
    multimedia: state.multimediaReducer.multimedia
})

export default withRouter(connect<MapStatePropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {getMultimediaByID})(FilmPage))