import React from 'react';
import "./PersonajeCartaDetail.scss"

const PersonajeCartaDetail = ({character, casas}) => {
  return (
  <div>

    <div className="cabecera">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
    </div>

    <div className="info">

        <div className="infoDetalle">

            <h3>CASA</h3>
            {casas && casas.map((casa) => {

                if (casa.name === "Maesters") {

                    return <img className='escudo' src="/got-house.png"  alt={character.house}/>

                }

                if (casa.name === character.house) {

                    console.log(casa.logoURL)

                    if (!casa.logoURL) {

                        return <img className='escudo' src="/got-house.png"  alt={character.house}/>

                    } else {

                        return <img className='escudo' src={casa.logoURL}  alt={character.house}/>

                    }

                } else {

                    return null

                }

            })}
            

        </div>
        <div className="infoDetalle">

            <h3>ALIANZAS</h3>
            <ul className='ul'>
                {(character && character.allegiances.length > 0) ? character.allegiances.map((alianza, index) => {

                    return (

                        <li key={index}>{alianza}</li>

                    )

                }) : null}
            </ul>

        </div>
        <div className="infoDetalle">

            <h3>APARICIONES</h3>
            <ul className='ul'>
                {(character && character.appearances.length > 0) ? character.appearances.map((aparicion, index) => {

                    return (

                        <li key={index}>{aparicion}</li>

                    )

                }) : null}
            </ul>

        </div>
        <div className="infoDetalle">

            <h3>PADRE</h3>
            {character.father ? <p className='li'>{character.father}</p> : <p className='li'>He went for cigarretes</p>}
            

        </div>
        <div className="infoDetalle">

            <h3>DESCENDIENTES</h3>
            <ul className='ul'>
                {(character && character.siblings.length > 0) ? character.siblings.map((descendiente, index) => {

                    return <li key={index}>{descendiente}</li>

                }) : <p className='li'>No tiene descendientes</p>}
            </ul>

        </div>
        <div className="infoDetalle">

            <h3>TITULOS</h3>
            <ul className='ul'>
                {(character && character.titles.length > 0) ? character.titles.map((title, index) => {

                    return (

                        <li key={index}>{title}</li>

                    )

                }) : <p className='li'>No tiene títulos</p>}
            </ul>

        </div>

    </div>

  </div>
  );
};

export default PersonajeCartaDetail;
