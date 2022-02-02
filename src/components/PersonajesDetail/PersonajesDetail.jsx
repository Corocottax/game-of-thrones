import "./PersonajesDetail.scss"
import { Link, useParams} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const PersonajesDetail = () => {

    const Url = "https://api.got.show/api/show/characters/";

    let { name } = useParams("name");
    const [character, setCharacter] = useState({})

    const getCharacterByName = async (name) => {

        const res = await axios(Url + name);
        console.log(res.data);
        setCharacter(res.data)
        console.log(character);

    }

    if (name){

        setCharacter(getCharacterByName(name));

    };

    return (
        <div>

            <Link to="/personajes">← Volver</Link>

            {}

            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <div>

                <h3>CASA</h3>
                <img src="aqui va la casa con el nombre exactamente igual a character.house"  alt={character.house}/>

            </div>
            <div>

                <h3>ALIANZAS</h3>
                <ul>
                    {character.allegiances.map((alianza) => {

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
