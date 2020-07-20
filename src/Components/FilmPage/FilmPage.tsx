import React, {useEffect} from "react";
import css from './FilmPage.module.scss'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getMultimediaByID, setNullMultimedia} from "../../redux/multimedia-reducer";
import {RouteComponentProps} from 'react-router-dom'
import {FilmType} from "../../redux/types";
import Loader from "../Common/Loader/Loader";
import PersonCard from "./PersonCard/PersonCard";
import Slider from "../Common/Slider/Slider";
import FilmCard from "../MainPage/FilmCard/FilmCard";

type PropsType = {
    id: string
    multimedia: FilmType | null
    similarFilms: Array<FilmType> | null
    getMultimediaByID: (id: string) => void
    setNullMultimedia: () => void
}

const FilmPage: React.FC<PropsType> = ({id, multimedia, similarFilms, getMultimediaByID, setNullMultimedia}) => {
    useEffect(() => {
        setNullMultimedia()
        getMultimediaByID(id)
    }, [id])
    return <div className={css.filmPage}>
        {multimedia ? <div>
            <div className={'small-container'}>
                <div className={css.filmPage__main}>
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
                            <i className={`${css.filmPage__icon} fas fa-photo-video`}/> {multimedia.duration} {multimedia.type === 'Serial' ? 'seasons' : 'minutes'}
                            <br></br>Actors: {multimedia?.actors.slice(0, 3).map(actor => <NavLink className={css.filmPage__personLink}
                            to={`/persons/${actor._id}`}> {actor.name} </NavLink>)}<br></br>
                            IMDb: {multimedia?.ratingIMDB}
                            <div style={{
                                'marginRight': 'auto',
                                'width': '90%',
                                'height': '5px',
                                'background': 'grey',
                                'borderRadius': '10px'
                            }}>
                                <div className={"line mt-2"} style={{
                                    'width': `${multimedia.ratingIMDB * 10}%`,

                                }}/>
                            </div>
                        </div>
                        <h5 className={"mt-2"}>Story</h5>
                        <div className={css.filmPage__description}>{multimedia?.description}</div>
                    </div>
                </div>
                <iframe className={css.filmPage__video}
                        src={`https://www.youtube.com/embed/${multimedia?.trailerUrl}`}/>
                <NavLink to={'/persons'} className={css.filmPage__link}>Actors and creators</NavLink>
                <div className={"d-flex mt-2"}>
                    {multimedia?.directors.concat(multimedia?.actors).slice(0, 7).map((person, i) => <PersonCard
                        name={person.name}
                        photoUrl={person.photoUrl}
                        profession={person.profession}
                        id={person._id}/>)}
                    <NavLink to={'/persons'} className={css.filmPage__showMore}>
                        More
                    </NavLink>
                </div>
            </div>
            <div className={css.filmPage__sliderBg}>
                <div className={"container"}>
                    {similarFilms &&
                    <Slider slidesCount={7} items={similarFilms.map(similarFilm => <FilmCard {...similarFilm}/>)}
                            title={'See also'}/>}
                </div>
            </div>
            <div className={'small-container'}>
                <div className={"d-flex align-items-center"}>
                    <NavLink to={'/persons'} className={css.filmPage__link}>Reviews</NavLink>
                    <NavLink to={'/persons'} className={css.filmPage__write}>Write a review</NavLink>
                </div>
                <div
                    className={css.filmPage__description}>About {multimedia.type.toLocaleLowerCase()} «{multimedia?.title}»
                </div>
                <div className={css.filmPage__reviews}>
                    {multimedia?.reviews.length !== 0 ? multimedia.reviews.map(review => review.description) : 'No reviews yet'}
                </div>
            </div>

        </div> : <Loader/>}
    </div>
}

type OwnPropsType = RouteComponentProps<{ id: string }>

type MapStatePropsType = {
    id: string,
    multimedia: FilmType | null
    similarFilms: Array<FilmType> | null
}

type mapDispatchToPropsType = {
    getMultimediaByID: (id: string) => void
    setNullMultimedia: () => void
}

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStatePropsType => ({
    id: ownProps.match.params.id,
    multimedia: state.multimediaReducer.multimedia,
    similarFilms: state.multimediaReducer.similarFilms
})

export default withRouter(connect<MapStatePropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {getMultimediaByID, setNullMultimedia})(FilmPage))