import styled from 'styled-components'
import Paper from '@mui/material/Paper'

export const StyleHeader = styled.div`
    width: calc(100% - 280px);
    height: 70px;
    background-color: rgba(249, 250, 251, 0.72);
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    z-index: 1;
`;

export const StyledHeaderLeft = styled.div`

`;

export const StyledHeaderRight = styled.div`

`;

export const StyleHeaderSarch = styled(Paper)`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    height: 0;
    overflow: hidden;
`;

export const StyleHeaderSarchContainer = styled.div`
    width: 100%;
    padding: 15px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyleSerchInput = styled.input`
    border: 0;
    outline: 0;
    font-weight: bold;
    font-size: 18px;
    transform: translateY(-5px);
`;