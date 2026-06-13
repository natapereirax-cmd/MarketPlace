import Topbar from "../../components/topbar"
import Home_Top from "../../components/Home_top"
import Category_list from "../../components/category_list"
import { Top_Home } from "./styles"

function Home() {
    return (
        
        <div>
            <Topbar />
            <Top_Home>
                <Home_Top></Home_Top>
            </Top_Home>
            <div>
                <Category_list></Category_list>
            </div>
        </div>
    )
}

export default Home