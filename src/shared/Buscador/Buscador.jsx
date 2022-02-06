import { FormattedMessage } from "react-intl";
import "./Buscador.scss"

const Buscador = ({setInputValue}) => {

    const getInputValue = (event) => {

        setInputValue(event.target.value.toLowerCase());

    }

    return (
        <div className='buscadorcito'>

            <img className='lupo' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643990492/search_1_l4wxpl.svg' alt='lupo'/>

            <input className='input' type="text" placeholder="Buscar..." onChange={getInputValue}/>

        </div>
    );
};

export default Buscador;
