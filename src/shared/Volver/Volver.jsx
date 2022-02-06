import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import "./Volver.scss"

const Volver = ({personaje}) => {
  return (
  <div>

    {personaje ? 
    
      <Link to="/personajes" className='volver'>
        <img className='flechita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643906676/letrasRecurso_1800x_rzchua.png' alt='flechita' />
        <h3><FormattedMessage id='Volver' defaultMessage="Volver" /></h3>
      </Link>

    : 
    
    <Link to="/linajes" className='volver'>
        <img className='flechita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643906676/letrasRecurso_1800x_rzchua.png' alt='flechita' />
        <FormattedMessage id='Volver' defaultMessage="Volver" />
      </Link>

    }
    

  </div>);
};

export default Volver;
