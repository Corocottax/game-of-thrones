import React, { useEffect, useState } from 'react';
import "./PersonajesDetail.scss"
import axios from "axios"
import { Link, useParams } from 'react-router-dom';

const PersonajesDetail = () => {

    const Url = "https://api.got.show/api/show/characters/";
    const [character, setCharacter] = useState({});
    let { name } = useParams("name");

    const getCharactersByName = async (name) => {

        const res = await axios(Url + name)
        console.log(res);
        setCharacter(res.data.results)

    };

    useEffect(() => {

        getCharactersByName(name);

    }, [name])

    return (
        <div>

            <Link to="/personajes">← Volver</Link>

            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <div>

                <h3>CASA</h3>
                <img src="aqui va la casa con el nombre exactamente igual a character.house"  alt={character.house}/>

            </div>
            <div>

                <h3>ALIANZAS</h3>
                <ul>
                    {character.llegiances.map((alianza) => {

                        return (

                            <li>{alianza}</li>

                        )

                    })}
                </ul>

            </div>
            <div>

                <h3>APARICIONES</h3>
                <ul>
                    {character.appearances.map((aparicion) => {

                        return (

                            <li>{aparicion}</li>

                        )

                    })}
                </ul>

            </div>
            <div>

                <h3>PADRE</h3>
                <p>{character.father}</p>

            </div>
            <div>

                <h3>DESCENDIENTES</h3>
                <ul>
                    {character.siblings.map((descendiente) => {

                        return (

                            <li>{descendiente}</li>

                        )

                    })}
                </ul>

            </div>
            <div>

                <h3>TITULOS</h3>
                <ul>
                    {character.titles.map((title) => {

                        return (

                            <li>{title}</li>

                        )

                    })}
                </ul>

            </div>

        </div>
    );
};

export default PersonajesDetail;
