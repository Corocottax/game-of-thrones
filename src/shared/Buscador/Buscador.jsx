import React from 'react';
import "./Buscador.scss"

const Buscador = () => {
    return (
        <div className='buscadorcito'>

            <button type='button' className='botoncito'>

                <img className='lupo' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643990492/search_1_l4wxpl.svg' alt='lupo'/>

            </button>
            <input className='input' type="text" placeholder='Buscar...'/>

        </div>
    );
};

export default Buscador;
