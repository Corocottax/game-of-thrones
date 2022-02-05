import React, {useContext} from 'react';
import "./Idiomas.scss"
import { Context } from "../Wrapper/Wrapper";
// import { FormattedMessage } from 'react-intl';

const Idiomas = () => {
  const context = useContext(Context);
  return (
  <div className='idiomitas'>

    <button className='banderitaEs' type='button'  value={"es"} onClick={context.selectLanguage}></button>
    <button className='banderitaEn' type='button' value={"en"} onClick={context.selectLanguage}></button>

  </div>
  );
};

export default Idiomas;
