import { ActionTypes } from './../contants/action-types'

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_THEME,
        payload: products
    }
}