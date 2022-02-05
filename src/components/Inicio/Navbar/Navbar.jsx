import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"

const Footer = () => {
    return (
        <nav>

            <NavLink to="/personajes" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>Personajes</NavLink>
            <NavLink to="/linajes" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>Casas</NavLink>
            <NavLink to="/cronologia" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>Cronologia</NavLink>

        </nav>
    );
};

export default Footer;
