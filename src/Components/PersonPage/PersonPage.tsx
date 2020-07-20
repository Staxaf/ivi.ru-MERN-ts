import React, {useEffect} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getPersonByID} from "../../redux/person-reducer";
import {FilmType, PersonsType} from "../../redux/types";
import Loader from "../Common/Loader/Loader";
import css from './PersonPage.module.scss'
import Slider from "../Common/Slider/Slider";
import FilmCard from "../MainPage/FilmCard/FilmCard";

type PropsType = {
    id: string
    person: PersonsType | null
    personFilms: Array<FilmType> | null
    getPersonByID: (id: string) => void
}

const PersonPage: React.FC<PropsType> = ({id, person, personFilms, getPersonByID}) => {
    useEffect(() => {
        getPersonByID(id)
    }, [id])
    return <div className={css.personPage_bg}>
        {person ? <div className={'small-container'}>
            <div className={css.personPage}>
                <div className={css.personPage__title}>
                    <div className={css.personPage__imgWrapper}>
                        <img src={person?.photoUrl} alt=""/>
                    </div>
                    <div>
                        <h2 className={css.personPage__name}>{person?.name}</h2>
                        <p className={css.personPage__details}>{person?.description}</p>
                    </div>
                </div>
               <div className={'mt-5'}>
                   {personFilms && <Slider slidesCount={5} items={personFilms?.map((personFilm, i) =>
                       <FilmCard key={i} {...personFilm} textColor={'#25213f'} />)}
                                           title={`Films of ${person?.profession} ${person.name}`} textColor={'#25213f'}  />}
               </div>
            </div>
        </div>: <Loader />}
    </div>
}

type OwnPropsType = RouteComponentProps<{ id: string }>


type mapDispatchToPropsType = {
    getPersonByID: (id: string) => void
}

type MapStatePropsType = {
    id: string
    person: PersonsType | null
    personFilms: Array<FilmType> | null
}

const mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStatePropsType => ({
    id: ownProps.match.params.id,
    person: state.personReducer.person,
    personFilms: state.personReducer.personFilms
})

export default withRouter(connect<MapStatePropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {getPersonByID})(PersonPage))
