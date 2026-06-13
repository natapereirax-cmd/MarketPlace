import profile_icon from "../../assets/img/profile_icon.png";
import { Styled_prof_btn } from "./styles";
import { useNavigate } from "react-router-dom";

function Profile_btn() {
  const navigate = useNavigate()
  return (
    <Styled_prof_btn>
      <button onClick={() => navigate('/login')}>
        <img src={profile_icon} />
      </button>
    </Styled_prof_btn>
  );
}

export default Profile_btn;
