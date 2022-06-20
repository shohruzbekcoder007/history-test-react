import { combineReducers } from "redux"
import { themeReducer } from "./themeReducer"
import { languageReducer } from "./languageReducer"
import { userReducer } from "./userReducer"

const reducers = combineReducers({
    theme: themeReducer,
    language: languageReducer,
    user: userReducer
})

export default reducers;