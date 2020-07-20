import axios from 'axios'
import {API_URL, FilmType, SET_MULTIMEDIA, SET_SIMILAR_FILMS} from "./types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


type initialStateType = {
    multimedia: FilmType | null
    similarFilms: Array<FilmType> | null
}

const initialState: initialStateType = {
    multimedia: null,
    similarFilms: null
}

export const multimediaReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_MULTIMEDIA:
            return {...state, multimedia: action.payload.multimedia}
        case SET_SIMILAR_FILMS:
            return {...state, similarFilms: action.payload.similarFilms}
        default:
            return state
    }
}
// Action creators
type ActionsType = SetMultimediaActionType | SetSimilarFilmsActionType

type SetMultimediaActionType = {
    type: typeof SET_MULTIMEDIA
    payload: {
        multimedia: FilmType | null
    }
}

const setMultimedia = (multimedia: FilmType | null): SetMultimediaActionType => ({type: SET_MULTIMEDIA, payload: {multimedia}})
type SetSimilarFilmsActionType = {
    type: typeof SET_SIMILAR_FILMS
    payload: {
        similarFilms: Array<FilmType> | null
    }
}
const setSimilarFilms = (similarFilms: Array<FilmType> | null): SetSimilarFilmsActionType => ({type: SET_SIMILAR_FILMS, payload: {similarFilms}})

// Redux thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

type MultimediaResponseType = {
    multimedia: FilmType
    similarFilms: Array<FilmType>
}

export const getMultimediaByID = (id: string): ThunkType => async (dispatch) => {
    const response = await axios.get<MultimediaResponseType>(`${API_URL}/multimedia/get/${id}`)
    dispatch(setMultimedia(response.data.multimedia))
    dispatch(setSimilarFilms(response.data.similarFilms))
}

export const setNullMultimedia = (): ThunkType => async (dispatch) => {
    dispatch(setMultimedia(null))
    dispatch(setSimilarFilms(null))
}
