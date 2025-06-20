import React, { useState } from "react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillSlackSquare } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Hulylogo from "../../assets/Images/huly-logo-png.jpeg";
// import Hulylogo from '../../assets/Images/huly-logo-png.jpeg'
import { Link } from "react-router-dom";
export default function Navbar() {
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const handleResize = () =>{
      if (window.innerWidth >= 767){
        setdropdownOpen(false);
        setMenuOpen(false);
      }
    }

    React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div>
      <nav>
        <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)} >
        <FiMenu size={20}/>
        </div>
        <ul>
          <Link to={"/homepage"}>
            <li>
              <img src={Hulylogo} alt="Logo" />
            </li>
          </Link>
          <Link to={"/pricing"}>
            <li>Pricing </li>
          </Link>

          <li   >
            Resources <IoIosArrowDown  size={10} />
            <ul className="dropdown1" onClick={() => setdropdownOpen(!dropdownOpen)} >
              <Link to={"/blog"}>
                <li>
                  Blog<p>Read our latest Insights</p>
                </li>
              </Link>
            <Link to={"/document"} >  <li>
                Documents<h4>Explore our tutorials</h4>
              </li> </Link>
            </ul>
          </li>
          <li>
            Community <IoIosArrowDown size={10} />
            <ul className="dropdown2"  >
              <li style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"6px"}} ><FaSquareXTwitter size={25} color="lightgrey"/>X.com</li>
              <li style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"6px"}} >< SiLinkedin size={25} color="lightgrey" /> LinkedIn</li>
              <li style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"6px"}} >< FaSquareYoutube size={25} color="lightgrey" />Youtube</li>
              <li style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"6px"}}><AiFillSlackSquare size={25} color="lightgrey" />Slack</li>
              <li style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"6px"}} > < FaGithubSquare size={25} color="lightgrey" /> GitHub </li>
            </ul>
          </li>
          <Link to={"/download"}>
            <li>Download</li>
          </Link>
        </ul>
        <div className="nav-2">
          <ul>
            <li  className="bttnn1">
                <a href="https://github.com/hcengineering/platform" target="_blank" rel="noopener noreferrer">  
                 <IoLogoGithub className="git-icon-nav" size={15} /> Star Us
                </a></li>

            <Link to={"/signup"}>
              <li className="bttnn2"> SIGN IN</li>
            </Link>

            <Link to={"/getstarted"}>
              <li className="bttnn3">GET STARTED</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
