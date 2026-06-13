import { UpTopbar, UpTopBarRight, UpTopbarLeft, UpTopBarCenter, BotBar, TopBar } from "./styles"
import Logo from "../logo"
import Profile_btn from "../profile_button"
import Seach_Bar from "../search_bar"
import Botbar_btn from "../botbar_btn"

function Topbar() {
    return (
        <div>
            <TopBar>
            <UpTopbar>
                <UpTopbarLeft>
                    <Seach_Bar />
                </UpTopbarLeft>

                <UpTopBarCenter>
                    <Logo />
                </UpTopBarCenter>

                <UpTopBarRight>
                    <Profile_btn />
                </UpTopBarRight>
            </UpTopbar>
            <BotBar>
                <Botbar_btn />
            </BotBar>
            </TopBar>
        </div>
    )
}

export default Topbar