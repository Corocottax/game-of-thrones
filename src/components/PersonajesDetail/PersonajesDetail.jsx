import "./PersonajesDetail.scss"
import { useParams} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getCharacterByName } from "../../functions/Functions"
import PersonajeCartaDetail from "./PersonajeCartaDetail/PersonajeCartaDetail";
import NotFound from "./NotFound/NotFound";

const PersonajesDetail = () => {

    let { name } = useParams("name");
    const [character, setCharacter] = useState();

    useEffect(() => {

        if (name)
            getCharacterByName(name).then((data) => {

                setCharacter(data);

            });

    }, [name]);

    return (
        <div>
            {character ? <PersonajeCartaDetail character={character}/> : <NotFound />}
        </div>
    );
    
};

export default PersonajesDetail;
