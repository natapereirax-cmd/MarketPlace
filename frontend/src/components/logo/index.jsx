import icon from "../../assets/img/icon.png";
import LogoStyle from "./styles";

function Logo() {
  return (
    <LogoStyle>
      <img src={icon} />
      <h1>MarketPlace</h1>
    </LogoStyle>
  );
}

export default Logo;
