import axios from 'axios'
import {API_URL, PersonsType, SET_PERSONS} from "./types";



type initialStateType = {
    persons: Array<PersonsType> | null
}

const initialState: initialStateType = {
    persons: null
}

export const mainReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_PERSONS:
            return {...state, persons: action.payload.persons}
        default:
            return state
    }
}
type ActionsTypes = setPersonsActionType
type setPersonsActionType = {
    type: typeof SET_PERSONS
    payload: {
        persons: Array<PersonsType>
    }
}
// Action creators
export const setPersons = (persons: Array<PersonsType>): setPersonsActionType => ({
    type: SET_PERSONS,
    payload: {persons},
})

// Redux thunks
export const getPersons = () => async (dispatch: any) => {
    axios.get(`${API_URL}/persons`)
        .then(response => {
            dispatch(setPersons(response.data.persons))
        })

}