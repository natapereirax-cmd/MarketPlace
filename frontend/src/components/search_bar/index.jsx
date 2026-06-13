import { Styled_Search_Bar } from "./styles";

function Seach_Bar() {
  return (
    <Styled_Search_Bar>
      <input type="text" placeholder="Search ..."/>
      <button>
        <i class="bx bx-search"></i>
      </button>
    </Styled_Search_Bar>
  );
}

export default Seach_Bar;
