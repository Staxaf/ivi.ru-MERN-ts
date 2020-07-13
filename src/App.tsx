import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route} from 'react-router-dom'
import './App.scss';
import Header from "./Components/Header/Header";
import MainPage from './Components/MainPage/MainPage';
import MoviesPage from "./Components/MoviesPage/MoviesPage";
import SeriesPage from "./Components/SeriesPage/SeriesPage";
import CartoonsPage from "./Components/CartoonsPage/CartoonsPage";

function App() {
    return (
        <div>
            <Header/>
            <div className='container'>
                <Route exact path={'/'} render={() => <MainPage/>}/>
                <Route path={'/movies'} render={() => <MoviesPage/>}/>
                <Route path={'/series'} render={() => <SeriesPage/>}/>
                <Route path={'/cartoons'} render={() => <CartoonsPage/>}/>
            </div>
        </div>
    );
}

export default App;
