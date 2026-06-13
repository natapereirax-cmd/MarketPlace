import styled from "styled-components";

export const Styled_Botbar_btn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  button {
    border: none;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 500;
  }
  button:hover {
    transform: scale(1.1);
  }
  div {
    background-color: #838383;
    width: 2px;
    height: 20px;
  }
`;
