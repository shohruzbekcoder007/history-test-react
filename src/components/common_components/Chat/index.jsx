import React from 'react'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'
import { ChatContainer } from './styles'

export default function Chat({header, footer, body}) {
  return (
    <ChatContainer>
        <ChatHeader header={header}/>
        <ChatBody body={body}/>
        <ChatFooter footer={footer}/>
    </ChatContainer>
  )
}
