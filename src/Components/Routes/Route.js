import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from '../../Pages/Home'
import Login from '../../Pages/Home/Login'
function Navigation() {
    return(
            <>
                <BrowserRouter>
                        <Routes>
                                <Route path="/" element={<Login/>} />
                                <Route path="/home" element={<Home/>} />
                        </Routes>
                </BrowserRouter>
            </>
    )
    
}
export default Navigation