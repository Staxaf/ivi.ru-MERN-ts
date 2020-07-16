import React from 'react'
import {connect} from 'react-redux'
import css from './MainPage.module.scss'
import Persons from "./Persons/Persons";
import {PersonsType} from "../../redux/types";
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    persons?: Array<PersonsType> | null
}

const MainPage: React.FC<PropsType> = ({persons}) => {
    return <div className={css.main}>
        <Persons persons={persons} />
    </div>
}

type MapStatePropsType = {
    persons: Array<PersonsType> | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    persons: state.mainReducer.persons
})

export default connect<MapStatePropsType, null, {}, AppStateType>(mapStateToProps, null)(MainPage)