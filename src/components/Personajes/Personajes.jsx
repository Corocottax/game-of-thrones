import React from "react";
import "./Personajes.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Idiomas from "../../shared/Idiomas/Idiomas";
import Castillito from "../../shared/Castillito/Castillito";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { generatePath } from "react-router-dom";

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

      <Navbar />
      {characters.map((character) => {
        return (
            <Link className="enlaceCharactersDetail" to={generatePath("/personajes/:name", { name: character.name })} >
          <div className="cartita">
            <img src={character.image} alt={character.name} />
            <h1 className="nombre">{character.name}</h1>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Personajes;
