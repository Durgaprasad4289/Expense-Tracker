import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"
export default function Home() {
    return (
        <div className="Home">
            <Navbar/>
            <Outlet/>
        </div>
    )
}