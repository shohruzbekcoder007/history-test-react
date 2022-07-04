import { ActionTypes } from "../contants/action-types"

const initialLanguage = null

export const socketReducer = (state = initialLanguage, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_SOCKET:
            return payload
    
        default:
            return state;

    }
}