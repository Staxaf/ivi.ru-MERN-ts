import {API_URL, FilmType, PersonsType, SET_PERSON, SET_PERSON_FILMS} from "./types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import axios from 'axios'

type InitialStateType = {
    person: PersonsType | null
    personFilms: Array<FilmType> | null
}

const initialState: InitialStateType = {
    person: null,
    personFilms: null
}

export const personReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_PERSON:
            return {...state, person: action.payload.person}
        case SET_PERSON_FILMS:
            return {...state, personFilms: action.payload.personFilms}
        default:
            return state
    }
}
// Action creators
type ActionsType = SetPersonActionType | SetPersonFilmsActionType

type SetPersonActionType = {
    type: typeof SET_PERSON
    payload: {
        person: PersonsType | null
    }
}

const setPerson = (person: PersonsType | null): SetPersonActionType => ({type: SET_PERSON, payload: {person}})
type SetPersonFilmsActionType = {
    type: typeof SET_PERSON_FILMS
    payload: {
        personFilms: Array<FilmType> | null
    }
}

const setPersonFilms = (personFilms: Array<FilmType> | null): SetPersonFilmsActionType => ({type: SET_PERSON_FILMS, payload: {personFilms}})

// Redux thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

type PersonResponseType = {
    person: PersonsType | null
    films: Array<FilmType> | null
}

export const getPersonByID = (id: string): ThunkType => async (dispatch) => {
    const response = await axios.get<PersonResponseType>(`${API_URL}/persons/get/${id}`)
    dispatch(setPerson(response.data.person))
    dispatch(setPersonFilms(response.data.films))
}



