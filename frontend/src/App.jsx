import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './containers/home/index'
import About_us from "./containers/about_us/index"
import Login from "./containers/login/index"
import Signup from "./containers/signup/index"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about_us" element={<About_us/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App