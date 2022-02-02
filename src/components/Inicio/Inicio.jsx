import React from 'react';
import Idiomas from '../../shared/Idiomas/Idiomas';
import "./Inicio.scss"
import Navbar from "./Navbar/Navbar"

const Inicio = () => {
    return (
        <div className='inicio'>

            <div className='inicio-header'>

                <Idiomas />

            </div>
                        

            <div className='titulo'>

                <h1 className='tituloInicio'>GAME OF THRONES</h1>

            </div>

            <Navbar />

        </div>
    );
};

export default Inicio;
