import React from "react";
import "./Cronologia.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import axios from "axios";
import { useEffect, useState } from "react";
import SimpleBar from 'simplebar-react'; 
import 'simplebar/dist/simplebar.min.css';
import 'simplebar-react/dist/simplebar.min.css';

let charactersOrden = [];
let characterPar = [];
let characterIm = [];

export function Cronologia() {

  const [charPar, setCharPar] = useState([]);
  const [charIm, setCharIm] = useState([]);
  const [highToLow, setHighToLow] = useState(true);

  const getCharacters = () => {
    axios("https://api.got.show/api/show/characters/").then((res) => {
      charactersOrden = [];
      for (const character of res.data) {
        if (character.age) {
          if (character.age.age) {
            charactersOrden.push(character);
          }
        }
      }
      console.log(charactersOrden);

      paintOrderCharacters();
      setHighToLow(false);
    });
  };

  const paintOrderCharacters = () => {
    if (highToLow) {
      charactersOrden.sort((a, b) => a.age.age - b.age.age);
    } else {
      charactersOrden.sort((a, b) => b.age.age - a.age.age);
    }

    characterPar = [];
    characterIm = [];

    for (let i = 0; i < charactersOrden.length; i++) {
      if (i % 2 === 0) {
        characterPar.push(charactersOrden[i]);
      } else {
        characterIm.push(charactersOrden[i]);
      }
    }
    console.log(charPar);
    console.log(charIm);
  
    setCharPar(characterPar);
    setCharIm(characterIm);  

};
  useEffect(()=>{

    getCharacters();
  }, []);

  const changeOrden = () => {
    if (highToLow) {
      setHighToLow(false);
      paintOrderCharacters();
    } else {
      setHighToLow(true);
      paintOrderCharacters();
    }
  };


  console.log(characterPar);
  console.log(characterIm);



  return (
    <div className="crono-total">
    <div className="crono">
      <div className="crono__header">
        <div className="crono__derecha">
      <Castillito />

      <Idiomas />
      </div>
      </div>
      <div className="divSimpleBar">
      <SimpleBar className='barraCrono'>
      <div className="crono__div">
      
        <div className="crono__flecha">
           <button onClick={changeOrden} className="crono__btn">
              {" "}
              {charPar[0] ? charPar[0].age.age : "0"}{" "}
            </button> 

         
        </div>
        
        <hr className="crono__separator"></hr>
        
        <div className="crono__cards">
          <div className="crono__column">
            {charPar.map((item, i) => (
              <div className="crono__character" key={i}>
                <p className="crono__info">{item.age.age}</p>
                <p className="crono__info">{item.name}</p>
                <img className="crono__photo" src={item.image} alt={item.name} />
              </div>
            ))}
          </div>

          <hr className="crono__separator2"></hr>

          <div className="crono__right">
            {charIm.map((item, i) => (
              <div className="crono__character" key={i}>
                <p className="crono__info">{item.age.age}</p>
                <p className="crono__info">{item.name}</p>
                <img
                  className="crono__photo"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
      
      </SimpleBar>
      </div>
      <Navbar />
    </div>
    </div>
  );
}

export default Cronologia;
