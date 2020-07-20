import {applyMiddleware, combineReducers, createStore} from "redux"
import {mainReducer} from "./main-reducer";
import thunk from "redux-thunk";
import {multimediaReducer} from "./multimedia-reducer";
import {personReducer} from "./person-reducer";

const rootReducer = combineReducers({
    mainReducer,
    multimediaReducer,
    personReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store