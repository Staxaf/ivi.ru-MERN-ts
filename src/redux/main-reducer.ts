
type initialStateType = {
    people: {
        name: string,
        films: Array<string>
        gender: string
        photoUrl: string
    } | null
}

const initialState: initialStateType = {
    people: null
}

export const mainReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        default:
            return state
    }
}