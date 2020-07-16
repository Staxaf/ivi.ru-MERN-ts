import React, {useEffect} from 'react';
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

type PropsType = {
    getPersons: () => void
}

const App: React.FC<PropsType> = ({getPersons}) => {
    useEffect(() => {
        getPersons()
    }, [])
    return (
        <div>
            <Header/>
            <div className={'main-bg'}>
                <div className='container'>
                    <Route exact path={'/'} render={() => <MainPage/>}/>
                    <Route path={'/movies'} render={() => <MoviesPage/>}/>
                    <Route path={'/series'} render={() => <SeriesPage/>}/>
                    <Route path={'/cartoons'} render={() => <CartoonsPage/>}/>
                </div>
            </div>
        </div>
    );
}

type MapDispatchPropsType = {
    getPersons: () => void
}

export default connect<null, MapDispatchPropsType, null, AppStateType>(null, {getPersons})(App);
