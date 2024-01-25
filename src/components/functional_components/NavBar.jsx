import "../css/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <li><Link to ="/Home">Home</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="/Experiance">Experiance</Link></li>
            <li><Link to ="/Login">Login</Link></li>
        </nav>
    )
}

export default NavBar;