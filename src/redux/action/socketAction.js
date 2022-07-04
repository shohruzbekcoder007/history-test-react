import { ActionTypes } from '../contants/action-types'

export const setSocket = (socket) => {
    return {
        type: ActionTypes.SET_SOCKET,
        payload: socket
    }
}