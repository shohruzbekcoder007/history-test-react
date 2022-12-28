import React, { useRef, useContext } from 'react'
import { AddButton, AdditonButton, AditionalButtons, ChatFooterAdition, ChatFooterBody, ChatFooterFile, ChatFooterSend, ChatFooterStyle, ChatFooterText, ChatFooterTop, SendButton, SendIconc } from './styles'
import attach from '../../../../images/chat/Icon/Outline/attach-2.svg'
import setbtnImg from '../../../../images/chat/Icon/Fill/navigation-2.svg'
import plus from '../../../../images/chat/Icon/Outline/plus.svg'
import film from '../../../../images/chat/Icon/Outline/film.svg'
import image from '../../../../images/chat/Icon/Outline/image.svg'
import film2 from '../../../../images/chat/Icon/Outline/file-2.svg'
import { useSelector } from "react-redux"
import { SocketContext } from '../../../../context/socket'
import { messagegroup, sendimage, sendvideo, sendfile } from '../../../../utils/API_urls'
import axios from '../../../../utils/baseUrl'

export default function ChatFooter({ footer }) {

    const socket = useContext(SocketContext)
    const user = useSelector((state) => state.user)
    const textMessageRef = useRef();

    const sendMessage = () => {
        axios
            .post(
                messagegroup,
                {
                    from_message: user._id,
                    to_message: footer.messageto,
                    context_message: textMessageRef.current.value,
                    type_message: 'text'
                },
                {
                    headers: {
                        "x-auth-token": sessionStorage.getItem("x-auth-token"),
                    },
                }
            )
            .then((response) => {
                sessionStorage.setItem("x-auth-token", response.headers["x-auth-token"]);
                socket.emit('send message', {
                    type: footer.type,
                    message: response.data
                })
                textMessageRef.current.value = ""
            })
            .catch((error) => {
                console.log({ errorMessage: error.toString() });
                console.error("There was an error!", error);
            });
    }

    const handleChange1 = async (selectorFiles) => {
        const formData = new FormData();
        formData.append("file", selectorFiles[0]);
        formData.append("to_message", footer.messageto);
        try {
            const response = await axios({
                method: "post",
                url: sendvideo,
                data: formData,
                headers: { "x-auth-token": sessionStorage.getItem("x-auth-token") },
            });
            socket.emit('send message', {
                type: footer.type,
                message: response.data
            })
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange2 = async (selectorFiles) => {
        const formData = new FormData();
        formData.append("file", selectorFiles[0]);
        formData.append("to_message", footer.messageto);
        try {
            const response = await axios({
                method: "post",
                url: sendimage,
                data: formData,
                headers: { "x-auth-token": sessionStorage.getItem("x-auth-token") },
            });
            socket.emit('send message', {
                type: footer.type,
                message: response.data
            })
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange3 = async (selectorFiles) => {
        const formData = new FormData();
        formData.append("file", selectorFiles[0]);
        formData.append("to_message", footer.messageto);
        try {
            const response = await axios({
                method: "post",
                url: sendfile,
                data: formData,
                headers: { "x-auth-token": sessionStorage.getItem("x-auth-token") },
            });
            console.log(response.data)
            socket.emit('send message', {
                type: footer.type,
                message: response.data
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ChatFooterStyle>
            <ChatFooterTop />
            <ChatFooterBody>
                <ChatFooterAdition>
                    <ChatFooterFile>
                        <AddButton>
                            <img src={plus} alt="send button" />
                        </AddButton>
                        <AditionalButtons>
                            <AdditonButton>
                                <input type="file" accept="video/*" onChange={e => { handleChange1(e.target.files)}} />
                                <img src={film} alt="send button" />
                            </AdditonButton>
                            <AdditonButton>
                                <input type="file" accept="image/*" onChange={e => { handleChange2(e.target.files)}} />
                                <img src={image} alt="send button" />
                            </AdditonButton>
                            <AdditonButton>
                                <input type="file" onChange={e => { handleChange3(e.target.files)}} />
                                <img src={film2} alt="send button" />
                            </AdditonButton>
                        </AditionalButtons>
                    </ChatFooterFile>
                    <ChatFooterText>
                        <input type="text" ref={textMessageRef} placeholder="Type a message her" />
                    </ChatFooterText>
                </ChatFooterAdition>
                <ChatFooterSend>
                    <SendIconc>
                        <img src={attach} alt="send button" />
                    </SendIconc>
                    <SendButton
                        onClick={sendMessage}
                    >
                        <img src={setbtnImg} alt="send button" />
                    </SendButton>
                </ChatFooterSend>
            </ChatFooterBody>
        </ChatFooterStyle>
    )
}
