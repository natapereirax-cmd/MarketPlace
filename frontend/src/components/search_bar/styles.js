import styled from "styled-components";

export const Styled_Search_Bar = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;


    input {
        height: 25px;
        min-width: 20%;
        max-width: 100%;
        border: solid 1px #3F3F3F;
        border-radius: 25px;
        outline: none;
        background-color: #838383;
        color: #CACACA;
        padding: 8px;
    }

    input::placeholder {
        color: #CACACA;
    }
    button {
        height: 25px;
        width: 25px;
        background-color: transparent;
        color: #FD2D2D;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: 0.3s;
        cursor: pointer;
    }
    i {
        text-shadow: 0 0 3px #FF6161;
        transition: 0.3s;
    }
    i:hover, button:hover {
        transform: scale(1.1);
    }
`