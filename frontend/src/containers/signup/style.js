import styled from "styled-components";

export const Background =  styled.div`
  background-color: #838383;
  width: 100vw;
  height: 100vh;

`

export const Styled_Signup = styled.div`
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 450px;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 15px;
  }

  input {
    height: 30px;
    width: 60%;
    border: none;
    border-radius: 15px;
    padding: 10px;
    margin-bottom: 15px;
    font-family: "Roboto", sans-serif;
    outline: none;
  }

  button {
    height: 30px;
    width: 60%;
    border: none;
    border-radius: 15px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 400;
    background-color: #fd2d2d;
    color: #262626;
    cursor: pointer;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    color: white;
  }
`;
