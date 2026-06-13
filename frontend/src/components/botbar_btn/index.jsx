import { Styled_Botbar_btn } from "./styles";
import { useNavigate } from "react-router-dom";

function Botbar_btn() {
  const navigate = useNavigate();
  return (
    <Styled_Botbar_btn>
      <button onClick={() => navigate("/home")}>HOME</button>
      <div></div>
      <button>SELL SOMETHING</button>
      <div></div>
      <button onClick={() => navigate("/about_us")}>ABOUT US</button>
      <div></div>
      <button
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&to=nata.pereirax@gmail.com&su=Contato pelo MarketPlace&body=Olá, vim até o seu email pelo MarketPlace. Bom trabalho!",
            "_blank",
          )
        }
      >
        CONTACT US
      </button>
      <div></div>
      <button onClick={() => navigate("/signup")}>SIGN UP</button>
    </Styled_Botbar_btn>
  );
}

export default Botbar_btn;
