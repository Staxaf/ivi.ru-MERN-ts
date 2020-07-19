//api base url
export const API_URL = 'http://localhost:5000'

// action types
//main-reducer action types
export const SET_PERSONS = 'SET_PERSONS'
export const SET_FILMS = 'SET_FILMS'
export const SET_CARTOONS = 'SET_CARTOONS'
export const SET_SERIALS = 'SET_SERIALS'

//multimedia-reducer action types
export const SET_MULTIMEDIA = 'SET_MULTIMEDIA'

// main-reducer types
export type PersonsType = {
    name: string,
    films: Array<FilmType>
    gender: string
    photoUrl: string
    profession: string
    _id: string
}

export type FilmType = {
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
}