import React from 'react';
import "./Linajes.scss"
import Navbar from "../Inicio/Navbar/Navbar"
import Castillito from "../../shared/Castillito/Castillito"
import Idiomas from "../../shared/Idiomas/Idiomas"

const Linajes = () => {
    return (
        <div>

            <div className='inicio-header'>

                <Castillito />
                <Idiomas />

            </div>

            <h1>Linajes works!</h1>

            <Navbar />

        </div>
    );
};

export default Linajes;
