import React, {useContext} from 'react';
import "./Idiomas.scss"
import { Context } from "../Wrapper/Wrapper";
// import { FormattedMessage } from 'react-intl';

const Idiomas = () => {
  const context = useContext(Context);
  return (
  <div className='idiomitas'>

    <img className='banderita'  value={"es"} onClick={context.selectLanguage}
    src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643819219/spain_2_nibk1z.png' alt='español'/>
    <img className='banderita'   value={"en"} onClick={context.selectLanguage} 
    src='https://res.cloudinary.com/dhp2zuftj/image/upload/v1643819251/united-kingdom_1_x47jxq.png' alt='ingles'/>

  </div>
  );
};

export default Idiomas;
