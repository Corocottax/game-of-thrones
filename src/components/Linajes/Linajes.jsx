import { useEffect, useState,} from "react";
import "./Linajes.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import LinajesGallery from "../LinajesGallery/LinajesGallery";
import { getHouses } from "../../functions/Functions";
import Buscador from "../../shared/Buscador/Buscador"

export default function Linajes({inputValue}) {
  const [Casas, setCasas] = useState([]);
  const personajes = false;  
  const casas = [];

  useEffect(() => {
   
    getHouses().then((data) => {

      if (inputValue) {

        data.map((character) => {

          if (character.name === inputValue) {
            
            casas.push(character)
            return console.log(character);

          } else {

            return null

          }

        })

        setCasas(casas);

      } else {

        setCasas(data);

      }

    });

  }, []);

  return (
    <>
      <div className="divHead">
       <Buscador personajes={personajes}/>
        <figcaption className="casLen" >
          <Castillito />
          <Idiomas />
        </figcaption>
      </div>
      <div>
      <LinajesGallery list={Casas} />
      <Navbar />
    </div>
  </>);
}
