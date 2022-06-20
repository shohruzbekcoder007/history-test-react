import { ActionTypes } from "../contants/action-types"
import theme_light from '../../theme/theme_light'

const initialDarkTheme = theme_light

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