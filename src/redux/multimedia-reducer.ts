import axios from 'axios'
import {
    API_URL,
    FilmType,
    SET_BEST_CARTOONS,
    SET_BEST_FILMS,
    SET_BEST_SERIALS,
    SET_MULTIMEDIA,
    SET_NEW_CARTOONS,
    SET_NEW_FILMS,
    SET_NEW_SERIALS,
    SET_SIMILAR_FILMS
} from "./types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


type initialStateType = {
    // multimedia page
    multimedia: FilmType | null
    similarFilms: Array<FilmType> | null
    //films
    newFilms: Array<FilmType> | null
    bestFilms: Array<FilmType> | null
    //serials
    newSerials: Array<FilmType> | null
    bestSerials: Array<FilmType> | null
    //cartoons
    newCartoons: Array<FilmType> | null
    bestCartoons: Array<FilmType> | null
}

const initialState: initialStateType = {
    multimedia: null,
    similarFilms: null,
    // films
    newFilms: null,
    bestFilms: null,
    //serials
    newSerials: null,
    bestSerials: null,
    //cartoons
    newCartoons: null,
    bestCartoons: null
}

export const multimediaReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_MULTIMEDIA:
            return {...state, multimedia: action.payload.multimedia}
        case SET_SIMILAR_FILMS:
            return {...state, similarFilms: action.payload.similarFilms}
        case SET_NEW_FILMS:
            return {...state, newFilms: action.payload.newFilms}
        case SET_BEST_FILMS:
            return {...state, bestFilms: action.payload.bestFilms}
        case SET_NEW_SERIALS:
            return {...state, newSerials: action.payload.newSerials}
        case SET_BEST_SERIALS:
            return {...state, bestSerials: action.payload.bestSerials}
        case SET_NEW_CARTOONS:
            return {...state, newCartoons: action.payload.newCartoons}
        case SET_BEST_CARTOONS:
            return {...state, bestCartoons: action.payload.bestCartoons}
        default:
            return state
    }
}
// Action creators
type ActionsType = SetMultimediaActionType | SetSimilarFilmsActionType | SetNewFilmsActionType | SetBestFilmsActionType | SetNewSerialsActionType
    | SetBestSerialsActionType | SetNewCartoonsActionType | SetBestCartoonsActionType

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
type SetNewFilmsActionType = {
    type: typeof SET_NEW_FILMS
    payload: {
        newFilms: Array<FilmType> | null
    }
}
const setNewFilms = (newFilms: Array<FilmType> | null): SetNewFilmsActionType => ({type: SET_NEW_FILMS, payload: {newFilms}})

type SetBestFilmsActionType = {
    type: typeof SET_BEST_FILMS
    payload: {
        bestFilms: Array<FilmType> | null
    }
}
const setBestFilms = (bestFilms: Array<FilmType> | null): SetBestFilmsActionType => ({type: SET_BEST_FILMS, payload: {bestFilms}})

type SetNewSerialsActionType = {
    type: typeof SET_NEW_SERIALS
    payload: {
        newSerials: Array<FilmType> | null
    }
}
const setNewSerials = (newSerials: Array<FilmType> | null): SetNewSerialsActionType => ({type: SET_NEW_SERIALS, payload: {newSerials}})

type SetBestSerialsActionType = {
    type: typeof SET_BEST_SERIALS
    payload: {
        bestSerials: Array<FilmType> | null
    }
}
const setBestSerials = (bestSerials: Array<FilmType> | null): SetBestSerialsActionType => ({type: SET_BEST_SERIALS, payload: {bestSerials}})

type SetNewCartoonsActionType = {
    type: typeof SET_NEW_CARTOONS
    payload: {
        newCartoons: Array<FilmType> | null
    }
}
const setNewCartoons = (newCartoons: Array<FilmType> | null): SetNewCartoonsActionType => ({type: SET_NEW_CARTOONS, payload: {newCartoons}})

type SetBestCartoonsActionType = {
    type: typeof SET_BEST_CARTOONS
    payload: {
        bestCartoons: Array<FilmType> | null
    }
}
const setBestCartoons = (bestCartoons: Array<FilmType> | null): SetBestCartoonsActionType => ({type: SET_BEST_CARTOONS, payload: {bestCartoons}})


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

type NewFilmsResponseType = {
    newFilms: Array<FilmType> | null
}

export const getNewFilms = (): ThunkType => async (dispatch) => {
    const response = await axios.get<NewFilmsResponseType>(`${API_URL}/multimedia/films/new`)
    dispatch(setNewFilms(response.data.newFilms))
}

type BestFilmsResponseType = {
    bestFilms: Array<FilmType> | null
}
export const getBestFilms = (): ThunkType => async (dispatch) => {
    const response = await axios.get<BestFilmsResponseType>(`${API_URL}/multimedia/films/best`)
    dispatch(setBestFilms(response.data.bestFilms))
}

type NewSerialsResponseType = {
    newSerials: Array<FilmType> | null
}

export const getNewSerials = (): ThunkType => async (dispatch) => {
    const response = await axios.get<NewSerialsResponseType>(`${API_URL}/multimedia/serials/new`)
    dispatch(setNewSerials(response.data.newSerials))
}

type BestSerialsResponseType = {
    bestSerials: Array<FilmType> | null
}
export const getBestSerials = (): ThunkType => async (dispatch) => {
    const response = await axios.get<BestSerialsResponseType>(`${API_URL}/multimedia/serials/best`)
    dispatch(setBestSerials(response.data.bestSerials))
}

type NewCartoonsResponseType = {
    newCartoons: Array<FilmType> | null
}

export const getNewCartoons = (): ThunkType => async (dispatch) => {
    const response = await axios.get<NewCartoonsResponseType>(`${API_URL}/multimedia/cartoons/new`)
    dispatch(setNewCartoons(response.data.newCartoons))
}

type BestCartoonsResponseType = {
    bestCartoons: Array<FilmType> | null
}
export const getBestCartoons = (): ThunkType => async (dispatch) => {
    const response = await axios.get<BestCartoonsResponseType>(`${API_URL}/multimedia/cartoons/best`)
    dispatch(setBestCartoons(response.data.bestCartoons))
}