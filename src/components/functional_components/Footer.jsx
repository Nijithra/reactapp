import '../css/Footer.css'
import { Link } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return(
        <div class='container'>
            <div class="copyright">
            <h2>@Copyright</h2>
            </div>
            <li class="icon"><CiInstagram style={{color: 'black', fontSize: '50px'}}/></li>
            <li class="icon"><FaGithub style={{color: 'black', fontSize: '50px'}} /></li>
            <li class="icon"><FaLinkedin style={{color: 'black', fontSize: '50px'}}/></li>
        </div>
    )
}

export default Footer;