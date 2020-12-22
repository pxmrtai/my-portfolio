import React, { useState } from "react";
import "./Navbar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import {NavbarData} from './NavbarData';


function Navbar() {
  const [clicked, setClicked] = useState(false)


  const handleClick = (e)=>{

      setClicked(!clicked)
    
  }
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none", color:'white' }}>
        <div className="navbar__logo">TNT</div>
      </Link>
      <div className="navbar__menu">
        {NavbarData.map((val, key)=>{
          return (
            <Link to={val.link} style={{textDecoration: "none"}}>
              <div className={window.location.pathname === val.link ? "navbar__link active" : "navbar__link"} key={key} onClick={handleClick}>{val.title}</div>
            </Link>
            
          )
        })}
      </div>
      <div className="navbar__options">
        <div className="navbar__option">
          <a href="https://www.facebook.com/pxmrtai/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
        </div>
        <div className="navbar__option">
        <a href="https://github.com/pxmrtai" target="_blank" rel="noreferrer"><GitHubIcon /></a>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
