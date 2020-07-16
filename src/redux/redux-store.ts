import {applyMiddleware, combineReducers, createStore} from "redux"
import {mainReducer} from "./main-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    mainReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store