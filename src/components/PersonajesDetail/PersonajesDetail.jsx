import "./PersonajesDetail.scss"
import { useParams} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getCharacterByName, getHouses } from "../../functions/Functions"
import PersonajeCartaDetail from "./PersonajeCartaDetail/PersonajeCartaDetail";
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import Volver from "../../shared/Volver/Volver";

const PersonajesDetail = () => {

    let { name } = useParams("name");
    const [character, setCharacter] = useState();
    const [casas, setCasas] = useState();
    const personaje = true;

    useEffect(() => {

        if (name)
            getCharacterByName(name).then((data) => {

                setCharacter(data);

        });

        getHouses().then((data) => {

            setCasas(data);

        });

    }, [name]);

    return (
        <div>
            <div className="header">
                <Volver personaje={personaje}/>
                <div className="derecha">
                    <Castillito />
                    <Idiomas />
                </div>
            </div>
            {character && <PersonajeCartaDetail character={character} casas={casas}/>}
        </div>
    );
    
};

export default PersonajesDetail;
