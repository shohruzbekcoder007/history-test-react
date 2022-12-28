import React, { useContext, useEffect } from 'react'
import Chat from '../../common_components/Chat'
import { useLocation } from 'react-router-dom'
import { SocketContext } from '../../../context/socket'
import { useSelector } from "react-redux"

export default function TeacherChat() {

    const user = useSelector((state) => state.user)

    const params = useLocation()
    const { state } = params

    const socket = useContext(SocketContext)

    useEffect(() => {
        socket.emit('enterchat', {userId: user?._id, groupId: state?._id})
        return () => {
            socket.emit('leavechat', {userId: user?._id, groupId: state?._id})
        }
    }, [socket, state, user])

    return (
        <Chat
            header={{
                name: state.group_name,
                context: "Online users",
                type: "group",
                toLink: "/teacher/course", 
                toLinkState: state
            }}
            footer={{
                messageto: state?._id,
                type: "group"
            }}
            body={{
                chat_body_id: state._id
            }}
        />
    )
}
