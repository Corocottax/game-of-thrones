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
import Buscador from "../../shared/Buscador/Buscador";

const Personajes = ({inputValue}) => {
  const [characters, setCharacters] = useState([]);
  const personajes = true;
  const charactersArray = [];

  useEffect(() => {
    fetch("https://api.got.show/api/show/characters/")
      .then((response) => {

        if (inputValue) {

          response.json().map((character) => {

            if (character.name === inputValue) {
              
              charactersArray.push(character);
              return console.log(character);

            } else {

              return null

            }

          })

          return characters;

        }

        return response.json();

      })
      .then((characters) => {
        setCharacters(characters);
      });
  }, []);

  return (
    <div>
      <div className="header">
        <Buscador personajes={personajes}/>
        <div className="derecha">
          <Castillito />
          <Idiomas />
        </div>
      </div>

      <div className="padre">
      <SimpleBar className='barra' style={{ maxHeight: `75vh`, width: "90%"}}>
        <div className="album">
          
            {characters.map((character, index) => {
              return (
                <Link key={index} className="Link" to={generatePath("/personajes/:name", { name: character.name })}>

                {(!character.image || character.image === ("https://vignette.wikia.nocookie.net/gameofthrones/images/1/1b/Grenn.jpg/revision/latest?cb=20180702193920") || character.image === ("https://vignette.wikia.nocookie.net/gameofthrones/images/9/96/Oberyn-Martell-house-martell-37118334-2832-4256.jpg/revision/latest/scale-to-width-down/333?cb=20150815065729")) ?
                
                <div className="carta" style={{backgroundImage:'url(/got-personaje.png)'}}>  <h4 className="nombre">{character.name}</h4></div> :

                <div className="carta" style={{backgroundImage:'url('+ character.image+')'}}>  <h4 className="nombre">{character.name}</h4></div>
                
                }
                  
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
 