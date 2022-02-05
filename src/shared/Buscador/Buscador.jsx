import React from 'react';
import Linajes from '../../components/Linajes/Linajes';
import Personajes from '../../components/Personajes/Personajes';
import "./Buscador.scss"

const Buscador = ({personajes}) => {

    const getInputValue = (event) => {

        const inputValue = event.target.value;
        console.log(inputValue);

        if (personajes) {

            <Personajes inputValue={inputValue}/>
    
        } else {
    
            <Linajes inputValue={inputValue}/>
    
        }

    }

    return (
        <div className='buscadorcito'>

            <img className='lupo' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643990492/search_1_l4wxpl.svg' alt='lupo'/>

            <input className='input' type="text" placeholder='Buscar...' onInput={getInputValue}/>

        </div>
    );
};

export default Buscador;
