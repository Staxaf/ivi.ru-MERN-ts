//api base url
export const API_URL = 'http://localhost:5000'

// action types
//main-reducer action types
export const SET_PERSONS = 'SET_PERSONS'
export const SET_FILMS = 'SET_FILMS'
export const SET_CARTOONS = 'SET_CARTOONS'
export const SET_SERIALS = 'SET_SERIALS'
export const SET_GENRES = 'SET_GENRES'

//multimedia-reducer action types
export const SET_MULTIMEDIA = 'SET_MULTIMEDIA'
export const SET_SIMILAR_FILMS = 'SET_SIMILAR_FILMS'
export const SET_NEW_FILMS = 'SET_NEW_FILMS'
export const SET_BEST_FILMS = 'SET_BEST_FILMS'
export const SET_NEW_SERIALS = 'SET_NEW_SERIALS'
export const SET_BEST_SERIALS = 'SET_BEST_SERIALS'
export const SET_NEW_CARTOONS = 'SET_NEW_CARTOONS'
export const SET_BEST_CARTOONS = 'SET_BEST_CARTOONS'

//person-reducer action types
export const SET_PERSON = 'SET_PERSON'
export const SET_PERSON_FILMS = 'SET_PERSON_FILMS'

// main-reducer types
export type PersonsType = {
    name: string,
    films: Array<FilmType>
    gender: string
    photoUrl: string
    profession: string
    description: string
    _id: string
}

export interface FilmType {
    genres: Array<GenreType>
    actors: Array<PersonsType>
    directors: Array<PersonsType>
    _id: string
    type: string
    title: string
    releaseYear: number
    producerCountry: string
    duration: number
    trailerUrl: string
    poster: string
    description: string
    ratingIMDB: number
    reviews: Array<ReviewType>
    ageRating: number
}

export type ReviewType = {
    userId: string
    description: string
    createdAt: Date
    likesCount: number
    dislikesCount: number
}

export type GenreType = {
    _id: string,
    title: string
    classIcon: string
}