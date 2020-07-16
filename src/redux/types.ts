//api base url
export const API_URL: string = 'http://localhost:5000'

// action types
export const SET_PERSONS: string = 'SET_PERSONS'

// main-reducer types
export type PersonsType = {
    name: string,
    films: Array<string>
    gender: string
    photoUrl: string
    profession: string
}