import "./PersonajesDetail.scss"
import { Link} from 'react-router-dom';

const PersonajesDetail = ({character}) => {

    const { allegiances, appearances, siblings, titles } = character;

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
                    {allegiances.map((alianza) => {

                        return (

                            <li>{alianza}</li>

                        )

                    })}
                </ul>

            </div>
            <div>

                <h3>APARICIONES</h3>
                <ul>
                    {appearances.map((aparicion) => {

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
                    {siblings.map((descendiente) => {

                        return (

                            <li>{descendiente}</li>

                        )

                    })}
                </ul>

            </div>
            <div>

                <h3>TITULOS</h3>
                <ul>
                    {titles.map((title) => {

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
