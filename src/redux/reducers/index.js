import { combineReducers } from "redux"
import { themeReducer } from "./themeReducer"
import { languageReducer } from "./languageReducer"
import { userReducer } from "./userReducer"
import { socketReducer } from "./socketReducer"

const reducers = combineReducers({
    theme: themeReducer,
    language: languageReducer,
    user: userReducer,
    socket: socketReducer
})

export default reducers;