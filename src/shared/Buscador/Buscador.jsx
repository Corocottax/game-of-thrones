import React from 'react';
import "./Buscador.scss"

const Buscador = () => {

    const getInputValue = (event) => {

        const inputValue = event.target.value;
        console.log(inputValue);

    }

    return (
        <div className='buscadorcito'>

            <img className='lupo' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643990492/search_1_l4wxpl.svg' alt='lupo'/>

            <input className='input' type="text" placeholder='Buscar...' onChange={getInputValue}/>

        </div>
    );
};

export default Buscador;
