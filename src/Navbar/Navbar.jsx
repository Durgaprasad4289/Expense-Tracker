import { NavLink } from "react-router-dom";
import "./Navbar.css"
export default function (){
    return(
        <div className="nav">
            <NavLink id="links" to="/">Home</NavLink>
            <NavLink id="links" to="/analysis">Analysis</NavLink>
            <NavLink id="links" to="/History">History</NavLink>
            <NavLink id="links" to="/login">Login</NavLink>
        </div>
    )
}