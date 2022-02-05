import React, {useContext} from 'react';
import "./Idiomas.scss"
import { Context } from "../Wrapper/Wrapper";
// import { FormattedMessage } from 'react-intl';

const Idiomas = () => {
  const context = useContext(Context);
  return (
  <div className='idiomitas'>

    <button className='banderitaEs'  value={"es"} onClick={context.selectLanguage} />
    <button className='banderitaEn'   value={"en"} onClick={context.selectLanguage} />

  </div>
  );
};

export default Idiomas;
