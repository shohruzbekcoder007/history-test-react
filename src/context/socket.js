import React from 'react'
import socketio from "socket.io-client"
import { host } from "../utils/API_urls"

export const socket = socketio.connect(host);
export const SocketContext = React.createContext();