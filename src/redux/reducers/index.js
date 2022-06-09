import { combineReducers } from "redux"
import { themeReducer } from "./themeReducer"
import { languageReducer } from "./languageReducer"

const reducers = combineReducers({
    theme: themeReducer,
    language: languageReducer
})

export default reducers;