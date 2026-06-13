import styled from "styled-components";
import HomeBg from "../../assets/img/home_main_img.png";

export const Styled_Home_top = styled.div`
  background-image: url(${HomeBg});
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  aspect-ratio: 16/6;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #f7f6f8;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 10px;

  .small_btn {
    border: none;
    border-radius: 3px;
    color: #FD2D2D;
    background-color: #262626;
    height: 20px;
    width: 80px;
    font-family: "Roboto", sans-serif;
  }
`;

export const Styled_Home_top_content = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  transform: translateY(-50%);
  h1 {
    font-size: clamp(12px, 3vw, 40px);
    color: #262626;
  }
`;

export const Styled_Search_div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  margin-top: 7px;

  input {
    height: clamp(20px, 5vw,35px);
    border-radius: 8px;
    border: solid 1px #262626;
    outline: none;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    width: clamp(160px, 15vw, 240px);
    padding: 8px;
  }
  select {
    border-radius: 8px;
    outline: none;
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-weight: 500;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: clamp(20px, 5vw,35px);
    width: clamp(20px, 5vw,35px);
    border-radius: 8px;
    border: none;
    background-color: #262626;
    color: #FD2D2D;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 5px;
  }
`;

export const Styled_Filter_div = styled.div `
  background-color: #262626;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border-radius: 20px;

  i {
    font-size: clamp(8px, 1.7vw,70px);
    color: #FD2D2D;
    margin-left: 2%;
  }

  #your_loc {
    font-family: "Roboto", sans-serif;
    font-size: clamp(8px, 0.9vw,18px);
    color: #CACACA;
  }
  #loc {
    font-family: "Roboto", sans-serif;
    font-size: clamp(8px, 1.6vw,70px);
    color: white;
  }

  button {
    background-color: #FD2D2D;
    border: none;
    font-size: clamp(8px, 1.7vw,70px);
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    padding: 2.5%;
    border-bottom-right-radius: 12.5px;
    border-top-right-radius: 12.5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 7px;
    cursor: pointer;
  }
`
