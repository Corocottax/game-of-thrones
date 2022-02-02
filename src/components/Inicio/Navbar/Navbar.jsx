import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.scss"

const Footer = () => {
    return (
        <nav>

            <NavLink to="/personajes" activeclassname={"active"} className="navbarAnchord">Personajes</NavLink>
            <NavLink to="/linajes" activeclassname={"active"} className="navbarAnchord">Casas</NavLink>
            <NavLink to="/cronologia" activeclassname={"active"} className="navbarAnchord">Cronologia</NavLink>

        </nav>
    );
};

export default Footer;
