import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.scss';
import Header from "./Components/Header/Header";
import MainPage from './Components/MainPage/MainPage';
import MoviesPage from "./Components/MoviesPage/MoviesPage";
import SeriesPage from "./Components/SeriesPage/SeriesPage";
import CartoonsPage from "./Components/CartoonsPage/CartoonsPage";
import {getPersons} from "./redux/main-reducer";
import {AppStateType} from "./redux/redux-store";
import FilmPage from "./Components/FilmPage/FilmPage";
import PersonPage from "./Components/PersonPage/PersonPage";

type PropsType = {}

const App: React.FC<PropsType> = () => {
    return (
        <div>
            <Header/>
            <div className={'main-bg'}>
                <div className='container'>
                    <Route exact path={'/'} render={() => <MainPage/>}/>
                    <Route exact path={'/films'} render={() => <MoviesPage/>}/>
                    <Route exact path={'/serials'} render={() => <SeriesPage/>}/>
                    <Route exact path={'/cartoons'} render={() => <CartoonsPage/>}/>
                </div>
                <Route path={'/watch/:type/:id'} render={() => <FilmPage />} />
                <Route path={'/persons/:id'} render={() => <PersonPage/>} />
            </div>
        </div>
    );
}

type MapDispatchPropsType = {}

export default connect<{}, MapDispatchPropsType, {}, AppStateType>(null, {getPersons})(App);
