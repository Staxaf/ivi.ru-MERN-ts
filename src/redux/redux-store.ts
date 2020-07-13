import {combineReducers, createStore} from "redux"
import {mainReducer} from "./main-reducer";

const reducers = combineReducers({
    mainReducer
})

const store = createStore(reducers)

export default store