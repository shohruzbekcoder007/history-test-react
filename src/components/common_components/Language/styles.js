import styled from 'styled-components'

export const ChangeLanguageButton = styled.span`
    display: inline-block;
    padding-left: 5px;
    cursor: pointer;
    text-decoration: ${props => props.active?"underline":"none"}
`;