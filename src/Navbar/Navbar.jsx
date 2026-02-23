import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/analysis">Analysis</NavLink>
            <NavLink className="nav-link" to="/history">History</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </nav>
    )
}