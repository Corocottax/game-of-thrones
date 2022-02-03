import React from 'react';
import { Link } from 'react-router-dom';
import "./PersonajeCartaDetail.scss"

const PersonajeCartaDetail = ({character}) => {
  return (
  <div>

    <Link to="/personajes">← Volver</Link>
    
    <div className="cabecera">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
    </div>

    <div className="info">

        <div className="infoDetalle">

            <h3>CASA</h3>
            <img src="aqui va la casa con el nombre exactamente igual a character.house"  alt={character.house}/>

        </div>
        <div className="infoDetalle">

            <h3>ALIANZAS</h3>
            <ul>
                {(character && character.allegiances.length > 0) ? character.allegiances.map((alianza) => {

                    return (

                        <li key={alianza}>{alianza}</li>

                    )

                }) : null}
            </ul>

        </div>
        <div className="infoDetalle">

            <h3>APARICIONES</h3>
            <ul>
                {(character && character.appearances.length > 0) ? character.appearances.map((aparicion) => {

                    return (

                        <li key={aparicion}>{aparicion}</li>

                    )

                }) : null}
            </ul>

        </div>
        <div className="infoDetalle">

            <h3>PADRE</h3>
            <p>{character.father}</p>

        </div>
        <div className="infoDetalle">

            <h3>DESCENDIENTES</h3>
            <ul>
                {(character && character.siblings.length > 0) ? character.siblings.map((descendiente) => {

                    return (

                        <li key={descendiente}>{descendiente}</li>

                    )

                }) : null}
            </ul>

        </div>
        <div className="infoDetalle">

            <h3>TITULOS</h3>
            <ul>
                {(character && character.titles.length > 0) ? character.titles.map((title) => {

                    return (

                        <li key={title}>{title}</li>

                    )

                }) : null}
            </ul>

        </div>

    </div>

  </div>
  );
};

export default PersonajeCartaDetail;