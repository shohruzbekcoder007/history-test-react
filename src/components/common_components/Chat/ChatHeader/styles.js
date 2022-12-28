import styled from "styled-components";

export const ChatHeaderStyle = styled.div`
    width: 100%;
    height: 110px;
    background: #FAFBFF;
    border-radius: 6px 6px 0px 0px;
    padding: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ChatHeaderUser = styled.div`
    padding-left: 32px;
    display: flex;
    align-items: center;
    gap: 20px;
`

export const ChatHeaderSettings = styled.div`
    display: flex;
    gap: 20px;
`

export const HeaderSettingsBox = styled.div`
    width: 52px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 50%;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.03), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const UserPhoto = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    filter: drop-shadow(4px 4px 15px rgba(154, 81, 48, 0.05)) drop-shadow(2px 2px 10px rgba(154, 81, 48, 0.1)) drop-shadow(1px 1px 50px rgba(154, 81, 48, 0.15));
    img {
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: inherit;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;
`

export const UserInfoMain = styled.h5`
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 21px;
    color: #0D1C2E;
`

export const UserInfoAdditon = styled.span`
    font-size: 16px;
    line-height: 19px;
    text-transform: lowercase;
    color: #2A8BF2;
`