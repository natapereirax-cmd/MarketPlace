import styled from "styled-components";

export const Styled_prof_btn = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  button {
    height: 40px;
    width: 40px;
    border: none;
    background-color: transparent;
    transition: 0.3s;
    cursor: pointer;
  }
  img {
    height: 40px;
    width: 40px;
  }
  img:hover, button:hover {
    transform: scale(1.1);
  }
`;
