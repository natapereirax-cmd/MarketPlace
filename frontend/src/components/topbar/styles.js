import styled from 'styled-components'

export const TopBar = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const UpTopbar = styled.div `
    width: 100%;
    height: 60px;
    background-color: #262626;
    color: #FD2D2D;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UpTopbarLeft = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 15px;
`

export const UpTopBarRight = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 15px;
`

export const UpTopBarCenter = styled.div `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BotBar =  styled.div `
    width: min(620px, 100%);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    min-height: 20px;
    background-color: #fd2d2d;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`