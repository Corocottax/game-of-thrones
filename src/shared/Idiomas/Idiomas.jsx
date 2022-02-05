import React, {useContext} from 'react';
import "./Idiomas.scss"
import { Context } from "../Wrapper/Wrapper";
// import { FormattedMessage } from 'react-intl';

const Idiomas = () => {
  const context = useContext(Context);
  return (
  <div className='idiomitas'>

    <button className='banderitaEs' type='button'  value={"es"} onClick={context.selectLanguage}>

      <img className='banderita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643819219/spain_2_nibk1z.png' alt='españita' />

    </button>
    <button className='banderitaEn' type='button' value={"en"} onClick={context.selectLanguage}>

      <img className='banderita' src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643819251/united-kingdom_1_x47jxq.png' alt='englandcita' />

    </button>

  </div>
  );
};

export default Idiomas;
