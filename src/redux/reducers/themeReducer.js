import { ActionTypes } from "../contants/action-types";

const initialDarkTheme = false

export const themeReducer = (state = initialDarkTheme, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_PRODUCTS:
            return payload
    
        default:
            return state;

    }
}