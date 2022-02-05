import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import { FormattedMessage } from "react-intl";

const Footer = () => {
    return (
        <nav>

            <NavLink to="/personajes" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
            <FormattedMessage id="Charac" defaultMessage="Personajes"/>
            </NavLink>

            <NavLink to="/linajes" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
            <FormattedMessage id="Houses" defaultMessage="Casas"/>
            </NavLink>

            <NavLink to="/cronologia" activeclassname={"active"} className={({isActive}) => (isActive ? "active" : "inactive")}>
            <FormattedMessage id="Crono" defaultMessage="Cronologia"/>
            </NavLink>

        </nav>
    );
};

export default Footer;