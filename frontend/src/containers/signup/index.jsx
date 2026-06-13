import { Styled_Signup } from "./style";
import Img from "../../assets/img/profile_icon.png";

import { Background } from "./style";

function Signup() {
  return (
    <Background>
      <Styled_Signup>
        <img src={Img} />
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign up</button>
        <p>
          Already have an account? <a href="/login">Log in!</a>
        </p>
      </Styled_Signup>
    </Background>
  );
}

export default Signup;
