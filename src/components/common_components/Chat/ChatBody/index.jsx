import React, { useContext, useState, useEffect, useRef } from 'react'
import userphoto from '../../../../images/chat/people/IMG_4157[1].jpg'
import more_horizontal from '../../../../images/chat/Icon/Outline/more-horizontal.svg'
import all_done from '../../../../images/chat/Icon/Outline/all-done.svg'
import file from '../../../../images/chat/Icon/Outline/file.svg'
import { Player } from 'video-react'
import axios from '../../../../utils/baseUrl'
import { getmessagegroup, getlastmessages } from '../../../../utils/API_urls'
import { SocketContext } from '../../../../context/socket'
import { useSelector } from "react-redux"
import 'video-react/dist/video-react.css';
import {
  ChatBodyContainer,
  ChatBodyStyle,
  Message,
  MessageDriw,
  MessageFile,
  MessageFileText,
  MessageFileWrapper,
  MessageInfo,
  MessageMain,
  MessageMeInfo,
  MessageRowMe,
  MessageRowPerson,
  MessageUserImg,
  MessageUserInfo,
  MessageUserTextMe,
  MessageUserTextPerson
} from './styles'

export default function ChatBody({body}) {

  const socket = useContext(SocketContext)
  const user = useSelector((state) => state.user)
  const scrollRef = useRef()
  const [newMessages, setNewMessages] = useState([])
  const [oldMessages, setOldMessages] = useState([])

  useEffect(() => {
    axios
      .get(
        getlastmessages + `?to_message=${body.chat_body_id}`,
        {
          headers: {
            "x-auth-token": sessionStorage.getItem("x-auth-token"),
          },
        }
      )
      .then((response) => {
        sessionStorage.setItem("x-auth-token", response.headers["x-auth-token"]);
        setOldMessages(response.data.reverse())
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }, [body])

  useEffect(() => {
    socket.on('sended message', (data) => {
      axios
        .get(
          getmessagegroup + `?group_message_id=${data.message._id}`,
          {
            headers: {
              "x-auth-token": sessionStorage.getItem("x-auth-token"),
            },
          }
        )
        .then((response) => {
          sessionStorage.setItem("x-auth-token", response.headers["x-auth-token"]);
          setNewMessages(prev => [...prev, response.data])
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    })
  }, [socket])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [newMessages])

  return (
    <ChatBodyStyle>
      <ChatBodyContainer ref={scrollRef}>
      {
          oldMessages.map(elem => {
            const create_date = new Date(elem.create_date);
            const date = create_date.getFullYear() + '-' + (create_date.getMonth() + 1) + '-' + create_date.getDate();
            const time = create_date.getHours() + ":" + create_date.getMinutes() + ":" + create_date.getSeconds();
            if (user._id + "" === elem.from_message._id + "") {
              return <MessageMe
                key={elem._id}
                msg={elem.context_message}
                type={elem.type_message}
                date={`${date}/${time}`}
              />
            } else {
              return <MessagePerson
                key={elem._id}
                msg={elem.context_message}
                type={elem.type_message}
                img={elem.from_message.profile_img}
                date={`${date}/${time}`}
              />
            }

          })
        }
        {
          newMessages.length !== 0 ?
            <MessageDriw>
              <span>New messages</span>
            </MessageDriw> : <></>
        }
        {
          newMessages.map(elem => {
            const create_date = new Date(elem.create_date);
            const date = create_date.getFullYear() + '-' + (create_date.getMonth() + 1) + '-' + create_date.getDate();
            const time = create_date.getHours() + ":" + create_date.getMinutes() + ":" + create_date.getSeconds();
            if (user._id + "" === elem.from_message._id + "") {
              return <MessageMe
                key={elem._id}
                msg={elem.context_message}
                type={elem.type_message}
                date={`${date}/${time}`}
              />
            } else {
              return <MessagePerson
                key={elem._id}
                msg={elem.context_message}
                type={elem.type_message}
                img={elem.from_message.profile_img}
                date={`${date}/${time}`}
              />
            }

          })
        }
      </ChatBodyContainer>
    </ChatBodyStyle>
  )
}

const MessagePerson = ({ msg, date, img, type }) => {
  return (
    <MessageRowPerson>
      <Message>
        <MessageMain>
          <MessageUserImg>
            <img src={img || userphoto} alt="person iconc" />
          </MessageUserImg>
          <MessageUserTextPerson>
            <CreateContent msg={msg} type={type} />
          </MessageUserTextPerson>
          <MessageUserInfo>
            <img src={more_horizontal} alt="more-horizontal iconc" />
          </MessageUserInfo>
        </MessageMain>
        <MessageInfo>
          <span>{date}</span>
        </MessageInfo>
      </Message>
    </MessageRowPerson>
  )
}

const MessageMe = ({ msg, date, type }) => {
  return (
    <MessageRowMe>
      <Message>
        <MessageMain>
          <MessageMeInfo>
            <img src={more_horizontal} alt="person iconc" />
          </MessageMeInfo>
          <MessageUserTextMe>
            <CreateContent msg={msg} type={type} />
          </MessageUserTextMe>
          <MessageUserInfo>
            <img src={all_done} alt="more-horizontal iconc" />
          </MessageUserInfo>
        </MessageMain>
        <MessageInfo>
          <span>{date}</span>
        </MessageInfo>
      </Message>
    </MessageRowMe>
  )
}

const CreateContent = ({ msg, type }) => {
  if (type === "text") {
    return <span>{msg}</span>
  } else if (type === "image") {
    return <a href={`${msg}`} target="_blank" rel="noreferrer"><img src={msg} alt="sended img" /></a>
  } else if (type === "video") {
    return (
      <div style={{ minWidth: "300px" }}>
        <Player
          poster={all_done}
          src={msg}
        />
      </div>
    );
  } else if (type === "file") {
    return (
      <MessageFileWrapper>
        <MessageFile>
          <img src={file} alt="file" />
        </MessageFile>
        <MessageFileText>
          <a href={msg} target="_blank" rel="noopener noreferrer">file ni yuklab olish</a>
        </MessageFileText>
      </MessageFileWrapper>
    )

  } else {
    return <a href={`${msg}`} target="_blank" rel="noreferrer">{msg}</a>
  }
}