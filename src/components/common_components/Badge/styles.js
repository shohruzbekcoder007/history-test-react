import styled from "styled-components";

export const StyleNotification = styled.div`
    width: 320px;
    max-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // padding: 0 8px;
`;

export const StyleNotificationBody = styled.div`
    padding: 8px;
`;

export const Message = styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;
`

export const StyleNotificationHeader = styled.div`
    width: 100%;
    min-height: 60px;
    border-bottom: 1px dashed #ccc;
    padding: 8px;
`;

export const StyleNotificationFooter = styled.div`
    width: 100%;
    min-height: 60px;
    border-top: 1px dashed #ccc;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;