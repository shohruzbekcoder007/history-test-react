import styled from "styled-components";

export const ChatBodyStyle = styled.div`
    width: 100%;
    height: calc(100% - 200px);
    padding: 29px 60px;
    background-color: #fff;
    overflow-y: auto;
`

export const ChatBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const MessageRowPerson = styled.div`
    width: 100%;
    padding-bottom: 15px;
    display: flex;
    justify-content: flex-start;
`

export const MessageRowMe = styled.div`
    width: 100%;
    padding-bottom: 15px;
    display: flex;
    justify-content: flex-end;
`

export const Message = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: max-content;
`

export const MessageMain = styled.div`
    display: flex;
`

export const MessageUserImg = styled.div`
    width: 36px;
    height: 36px;
    box-shadow: 4px 4px 15px rgba(154, 81, 48, 0.05), 2px 2px 10px rgba(154, 81, 48, 0.1), 1px 1px 50px rgba(154, 81, 48, 0.15);
    border-radius: 50%;
    margin-right: 24px;
    img {
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: inherit;
    }
`

export const MessageUserTextPerson = styled.div`
    max-width: 520px;
    padding: 14px 22px;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    box-shadow: 10px 10px 25px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 50px rgba(42, 139, 242, 0.1);
    border-radius: 0px 10px 10px 10px;
    background: linear-gradient(90.54deg, #60A9F6 0%, #2A8BF2 100%);
    img {
        max-width: 100%;
        height: auto;
    }
`

export const MessageUserTextMe = styled.div`
    max-width: 520px;
    padding: 14px 22px;
    font-size: 16px;
    line-height: 26px;
    color: #707C97;
    border: 1px solid rgba(112, 124, 151, 0.25);
    border-radius: 10px 10px 0 10px;
    box-shadow: 10px 10px 25px rgba(112, 124, 151, 0.05), 15px 15px 35px rgba(112, 124, 151, 0.05);
    img {
        max-width: 100%;
        height: auto;
    }
`

export const MessageUserInfo = styled.div`
    margin-left: 18px;
    display: flex;
    align-items: center;
`

export const MessageInfo = styled.div`
    display: flex;
    justify-content: end;
    padding-right: 45px;
    padding-top: 5px;
    span {
        font-size: 14px;
        line-height: 26px;
        color: rgba(112, 124, 151, 0.7);
    }
`

export const MessageDriw = styled.div`
    margin: 25px 0;
    padding: 0;
    width: 100%;
    height: 1px;
    background: rgba(112, 124, 151, 0.15);
    border-radius: 2px;
    position: relative;
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 0 22px;
        font-size: 14px;
        line-height: 26px;
        color: rgba(112, 124, 151, 0.7);
    }
`

export const MessageMeInfo = styled.div`
    margin-right: 14px;
    display: flex;
    align-items: center;
`

export const MessageFileWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const MessageFile = styled.div`
    width: 40px;
    height: 40px;
    background: rgb(125 184 248);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MessageFileText = styled.span`
    padding-left: 10px;
    display: inline-block;
`