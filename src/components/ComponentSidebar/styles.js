import styled from 'styled-components'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

export const Sidebar = styled.div`
    width: 280px;
    height: 100vh;
    overflow: auto;
    border-right: 1px dashed #ccc;
    @media (max-width: 900px){
        width: 100%;
        height: 100vh;
        position: absolute;
        background-color: transparent;
    }
`;

export const SidebarContainer = styled.div`
    @media (max-width: 900px){
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const SidebarMenu = styled.div`
    @media (max-width: 900px){
        width: 280px;
        max-height: 100vh;
        background-color: red;
        overflow: auto;
        min-height: 100vh;
    }
`;

export const SidebarCurtain = styled.div`
    display: none;
    @media (max-width: 900px){
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const StyleLogoContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyleUser = styled.div`
    width: 100%;
    display: flex;
    padding: 10px;
    justify-content: center;
`;

export const StyleChip = styled(Chip)`
    width: 200px;
    justify-content: flex-start !important;
    padding: 10px !important;
`;

export const StyleUserAvatar = styled(Avatar)`
    width: 35px !important;
    height: 35px !important;
`;