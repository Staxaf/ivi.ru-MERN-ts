import axios from 'axios'
import {API_URL, FilmType, SET_MULTIMEDIA} from "./types";


type initialStateType = {
    multimedia: FilmType | null
}

const initialState: initialStateType = {
    multimedia: null
}

export const multimediaReducer = (state=initialState, action: SetMultimediaActionType) => {
    switch (action.type) {
        case "SET_MULTIMEDIA":
            return {...state, multimedia: action.payload.multimedia}
        default:
            return state
    }
}
// Action creators
type ActionType = SetMultimediaActionType

type SetMultimediaActionType = {
    type: typeof SET_MULTIMEDIA
    payload: {
        multimedia: FilmType
    }
}

const setMultimedia = (multimedia: FilmType): SetMultimediaActionType => ({type: SET_MULTIMEDIA, payload: {multimedia}})

// Redux thunks
export const getMultimediaByID = (id: string) => (dispatch: any) => {
    axios.get(`${API_URL}/multimedia/get/${id}`)
        .then(response => {
            console.log(response.data)
            dispatch(setMultimedia(response.data.multimedia))
        })
}
