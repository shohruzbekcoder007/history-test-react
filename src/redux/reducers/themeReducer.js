import { ActionTypes } from "../contants/action-types"
import theme_dark from '../../theme/theme_dark'

const initialDarkTheme = theme_dark

export const themeReducer = (state = initialDarkTheme, { type, payload }) => {
    switch (type) {

        case ActionTypes.DARK_THEME:
            return payload

        case ActionTypes.LIGHT_THEME:
            return payload
    
        default:
            return state;

    }
}