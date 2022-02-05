import { useEffect, useState,} from "react";
import "./Linajes.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import LinajesGallery from "../LinajesGallery/LinajesGallery";
import { getHouses } from "../../functions/Functions";
import Buscador from "../../shared/Buscador/Buscador"

export default function Linajes({inputValue, setInputValue}) {
  const [Casas, setCasas] = useState([]);
  const personajes = false;  
  const casas = [];

  useEffect(() => {

    setInputValue("")

  }, [])

  useEffect(() => {
   
    getHouses().then((data) => {

      if (inputValue) {

        data.map((casa) => {

          if (casa.name.toLowerCase().includes(inputValue)) {
            
            return casas.push(casa);

          } else {

            return null

          }

        })

        setCasas(casas);

      } else {

        setCasas(data);

      }

    });

  }, [inputValue]);

  return (
    <>
      <div className="header">
        <Buscador personajes={personajes} inputValue={inputValue} setInputValue={setInputValue}/>
        <div className="derecha">
          <Castillito />
          <Idiomas />
        </div>
      </div>
      <div>
      <LinajesGallery list={Casas} />
      <Navbar />
    </div>
  </>);
}
