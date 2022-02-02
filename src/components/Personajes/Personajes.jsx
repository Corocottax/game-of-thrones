import React from 'react';
import "./Personajes.scss"
import Navbar from "../Inicio/Navbar/Navbar"
import Idiomas from '../../shared/Idiomas/Idiomas';
import Castillito from "../../shared/Castillito/Castillito"

const Personajes = () => {
    return (
        <div>

            <div className='inicio-header'>

                <Castillito />
                <Idiomas />

            </div>

            <h1>Personajes works!</h1>

            <Navbar />

        </div>
    );
};

export default Personajes;
