import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Castillito.scss"

const Castillito = () => {
  return (
  <div>

    <NavLink to="/" activeclassname={"active"} className="navbarAnchord">
    
      <img className='casita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1644078111/Group_o3o18i.svg' alt='casita' />
    
    </NavLink>
    

  </div>
  );
};

export default Castillito;
