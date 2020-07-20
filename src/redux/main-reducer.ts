import axios from 'axios'
import {API_URL, FilmType, PersonsType, SET_CARTOONS, SET_FILMS, SET_PERSONS, SET_SERIALS} from "./types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

type initialStateType = {
    persons: Array<PersonsType> | null
    films: Array<FilmType> | null
    cartoons: Array<FilmType> | null
    serials: Array<FilmType> | null
}

const initialState: initialStateType = {
    persons: null,
    films: null,
    cartoons: null,
    serials: null
}

export const mainReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_PERSONS:
            return {...state, persons: action.payload.persons}
        case SET_FILMS:
            return {...state, films: action.payload.films}
        case SET_CARTOONS:
            return {...state, cartoons: action.payload.cartoons}
        case SET_SERIALS:
            return {...state, serials: action.payload.serials}
        default:
            return state
    }
}
type ActionsType = SetPersonsActionType | SetNewFilmsActionType | SetCartoonsActionType | SetSerialsActionType
type SetPersonsActionType = {
    type: typeof SET_PERSONS
    payload: {
        persons: Array<PersonsType>
    }
}
// Action creators
export const setPersons = (persons: Array<PersonsType>): SetPersonsActionType => ({
    type: SET_PERSONS,
    payload: {persons},
})

type SetNewFilmsActionType = {
    type: typeof SET_FILMS
    payload: { films: Array<FilmType> }
}

export const setFilms = (films: Array<FilmType>): SetNewFilmsActionType => ({
    type: SET_FILMS,
    payload: {films}
})

type SetCartoonsActionType = {
    type: typeof SET_CARTOONS
    payload: { cartoons: Array<FilmType> }
}

export const setCartoons = (cartoons: Array<FilmType>): SetCartoonsActionType => ({
    type: SET_CARTOONS,
    payload: {cartoons}
})

type SetSerialsActionType = {
    type: typeof SET_SERIALS
    payload: { serials: Array<FilmType> }
}

export const setSerials = (serials: Array<FilmType>): SetSerialsActionType => ({
    type: SET_SERIALS,
    payload: {serials}
})

// Redux thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
type PersonsResponseType = {
    persons: Array<PersonsType>
}
export const getPersons = (): ThunkType => async (dispatch) => {
    const response = await axios.get<PersonsResponseType>(`${API_URL}/persons`)
    dispatch(setPersons(response.data.persons))

}

type FilmsResponseType = {
    films: Array<FilmType>
}

export const getFilms = (): ThunkType => async (dispatch) => {
    const response = await axios.get<FilmsResponseType>(`${API_URL}/multimedia/films`)
    dispatch(setFilms(response.data.films))
}
type CartoonsResponseType = {
    cartoons: Array<FilmType>
}

export const getCartoons = (): ThunkType => async (dispatch) => {
    const response = await axios.get<CartoonsResponseType>(`${API_URL}/multimedia/cartoons`)
    dispatch(setCartoons(response.data.cartoons))
}
type SerialsResponseType = {
    serials: Array<FilmType>
}

export const getSerials = (): ThunkType => async (dispatch) => {
    const response = await axios.get<SerialsResponseType>(`${API_URL}/multimedia/serials`)
    dispatch(setSerials(response.data.serials))

}