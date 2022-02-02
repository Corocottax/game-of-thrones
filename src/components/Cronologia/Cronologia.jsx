import React from 'react';
import "./Cronologia.scss"
import Navbar from "../Inicio/Navbar/Navbar"
import Castillito from "../../shared/Castillito/Castillito"
import Idiomas from "../../shared/Idiomas/Idiomas"

const Cronologia = () => {
    return (
        <div>

            <div className='inicio-header'>

                <Castillito />
                <Idiomas />

            </div>

            <h1>Cronologia works!</h1>

            <Navbar />

        </div>
    );
};

export default Cronologia;
