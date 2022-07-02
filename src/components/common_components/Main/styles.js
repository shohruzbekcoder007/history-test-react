import styled from 'styled-components'
import { keyframes } from 'styled-components'

const sidebar_close = keyframes`
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
        display: none;
    }
`

const sidebar_open = keyframes`
    from {
        display: block;
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
`;

export const ManWrappper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MainContainer = styled.div`
    width: calc(100% - 280px);
    height: 100vh;
    overflow: auto;
    padding-top: 70px;
    @media (max-width: 900px){
        width: 100%;
    }
`;

export const RouterContainer = styled.div`
    padding: 20px;
`