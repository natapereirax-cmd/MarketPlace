import { Styled_login } from "./style";
import Img from "../../assets/img/profile_icon.png";

import { Background } from "./style";

function Login() {
  return (
    <Background>
      <Styled_login>
        <img src={Img} />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Log in</button>
        <p>
          Don't you have an account? <a href="/signup">Sign up!</a>
        </p>
      </Styled_login>
    </Background>
  );
}

export default Login;
