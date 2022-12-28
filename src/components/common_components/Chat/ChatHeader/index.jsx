import React from 'react'
import { ChatHeaderSettings, ChatHeaderStyle, ChatHeaderUser, HeaderSettingsBox, UserInfo, UserInfoAdditon, UserInfoMain, UserPhoto } from './styles'
import settingsimg1 from '../../../../images/chat/Icon/Outline/power.svg'
import settingsimg2 from '../../../../images/chat/Icon/Outline/more-vertical.svg'
import userphoto from '../../../../images/chat/people/IMG_4157[1].jpg'
import { Link } from "react-router-dom";

export default function ChatHeader({ header }) {

    return (
        <ChatHeaderStyle>
            <ChatHeaderUser>
                <UserPhoto>
                    {
                        header.type === "group" ?
                            <HeaderSettingsBox>{header.name[0]}</HeaderSettingsBox> :
                            <img src={userphoto} alt="person iconc" />
                    }
                </UserPhoto>
                <UserInfo>
                    <UserInfoMain>{header.name}</UserInfoMain>
                    <UserInfoAdditon>{header.context}</UserInfoAdditon>
                </UserInfo>
            </ChatHeaderUser>
            <ChatHeaderSettings onClick={() => { }}>
                <Link
                    // to="course"
                    to={header.toLink}
                    state={{ course: header.toLinkState }}
                >
                    <HeaderSettingsBox>
                        <img src={settingsimg1} alt="attach-2 iconc" />
                    </HeaderSettingsBox>
                </Link>

                <HeaderSettingsBox>
                    <img src={settingsimg2} alt="attach-2 iconc" />
                </HeaderSettingsBox>
            </ChatHeaderSettings>
        </ChatHeaderStyle>
    )
}
