import styled from "styled-components"

export const Styled_Category_List = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    width: 25%;
    padding: 20px;
    background-color: #f7f6f8;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 10px;
    
    button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: row;
        font-size: 13px;
        font-family: "Roboto", sans-serif;
        background-color: transparent;
        color: #262626;
        border: none;
        margin: 10px;
        padding: 5px;
        cursor:pointer;
    }
    button:hover {
        color: #FD2D2D;
        transform: scale(1.1);
    }
    button i {
        margin-right: 5px;
    }
`