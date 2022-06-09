import { ActionTypes } from '../contants/action-types'
import theme_dark from '../../theme/theme_dark'
import theme_light from '../../theme/theme_light'

export const setDarkTheme = (theme = theme_dark) => {
    return {
        type: ActionTypes.DARK_THEME,
        payload: theme
    }
}

export const setLightTheme = (theme = theme_light) => {
    return {
        type: ActionTypes.LIGHT_THEME,
        payload: theme
    }
}

