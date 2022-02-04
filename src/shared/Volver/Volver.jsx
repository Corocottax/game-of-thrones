import React from 'react';
import { Link } from 'react-router-dom';
import "./Volver.scss"

const Volver = ({personaje}) => {
  return (
  <div>

    {personaje ? 
    
      <Link to="/personajes" className='volver'>
        <img className='flechita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643906676/letrasRecurso_1800x_rzchua.png' alt='flechita' />
        <h3>Volver</h3>
      </Link>

    : 
    
    <Link to="/casas" className='volver'>
        <img className='flechita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643906676/letrasRecurso_1800x_rzchua.png' alt='flechita' />
        <h3>Volver</h3>
      </Link>

    }
    

  </div>);
};

export default Volver;
