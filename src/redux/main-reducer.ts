import axios from 'axios'
import {API_URL, FilmType, PersonsType, SET_CARTOONS, SET_FILMS, SET_PERSONS, SET_SERIALS} from "./types";

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

export const mainReducer = (state = initialState, action: ActionsTypes): initialStateType => {
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
type ActionsTypes = SetPersonsActionType | SetNewFilmsActionType | SetCartoonsActionType | SetSerialsActionType
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
export const getPersons = () => async (dispatch: any) => {
    axios.get(`${API_URL}/persons`)
        .then(response => {
            dispatch(setPersons(response.data.persons))
        })

}

export const getFilms = () => async (dispatch: any) => {
    axios.get(`${API_URL}/multimedia/films`)
        .then(response => {
            dispatch(setFilms(response.data.films))
        })
}

export const getCartoons = () => async (dispatch: any) => {
    axios.get(`${API_URL}/multimedia/cartoons`)
        .then(response => {
            dispatch(setCartoons(response.data.cartoons))
        })
}

export const getSerials = () => async (dispatch: any) => {
    axios.get(`${API_URL}/multimedia/serials`)
        .then(response => {
            dispatch(setSerials(response.data.serials))
        })
}