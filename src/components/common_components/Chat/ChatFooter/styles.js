import styled from 'styled-components'

export const ChatFooterStyle = styled.div`
    padding: 0 60px 30px 60px;
    background-color: #fff;
    height: 90px;
`

export const ChatFooterTop = styled.div`
    width: 100%;
    height: 2px;
    background: rgba(112, 124, 151, 0.15);
    border-radius: 2px;
`

export const ChatFooterBody = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
`

export const ChatFooterAdition = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const ChatFooterSend = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
`

export const SendButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%);
    box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15), 2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);
`

export const SendIconc = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ChatFooterFile = styled.div`
    position: relative;
    :hover .send-file{
        display: block;
    }
`

export const AddButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%);
    box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15), 2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);
    background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%);
    box-shadow: none;
`

export const AditionalButtons = styled.div.attrs({className: 'send-file'})`
    position: absolute;
    display: ${props => props.file ? "block" : "none"};
    bottom: 100%;
    left: 0;
`

export const AdditonButton = styled.label`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%);
    box-shadow: 4px 4px 25px rgba(42, 139, 242, 0.15), 2px 2px 25px rgba(42, 139, 242, 0.05), 4px 6px 10px rgba(42, 139, 242, 0.15);
    margin-bottom: 10px;
    input {
        display: none;
    }
`

export const ChatFooterText = styled.div`
    width: 100%;
    padding-left: 20px;
    input {
        width: 100%;
        outline: none;
        border: none;
        font-size: 20px;
        line-height: 24px;
        color: rgba(112, 124, 151, 0.5);
    }
`