import React from "react";
import "./Personajes.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Idiomas from "../../shared/Idiomas/Idiomas";
import Castillito from "../../shared/Castillito/Castillito";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { generatePath } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Personajes = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.got.show/api/show/characters/")
      .then((response) => {
        return response.json();
      })
      .then((characters) => {
        setCharacters(characters);
      });
  }, []);

  return (
    <div>
      <div className="inicio-header">
        <Castillito />
        <Idiomas />
      </div>

      <div className="padre">
      <SimpleBar className='barra' style={{ maxHeight: `75vh`, width: "90%"}}>
        <div className="album">
          
            {characters.map((character) => {
              return (
                <Link className="Link" to={generatePath("/personajes/:name", { name: character.name })}>
                  
                  {character.image ? <div className="carta" style={{backgroundImage:'url('+ character.image+')'}}>  <h4 className="nombre">{character.name}</h4>
                    </div>:
                    <div className="carta" style={{backgroundImage:'url(/got-personaje.png)'}}>  <h4 className="nombre">{character.name}</h4>
                    </div>}
                  
                </Link>

              );
            })}
      
        </div>
      </SimpleBar>
      </div>
      <Navbar />
    </div>
    
  );
};

export default Personajes;
 