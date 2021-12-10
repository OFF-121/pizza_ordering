import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';
import Logo from "../../../assests/pizzaLogo.png";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="leftSide">
                    <img src={Logo} alt="logo" className="imgLogo"/>
                    <h2 id="hh">Pizza Hut</h2>
                </div>
                <div className="rightSide">
                    
                    <div className="ulList">
                        <Link to="/" className="menus">Home</Link>
                        <Link to="/Menu" className="menus" id="mm">Menu</Link>
                        <Link to="/About" className="menus">About</Link>
                        <Link to="/Contact" className="menus">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
