import { useEffect, useState,} from "react";
import "./Linajes.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import LinajesGallery from "../LinajesGallery/LinajesGallery";
import { getHouses } from "../../functions/Functions";
import Buscador from "../../shared/Buscador/Buscador"

export default function Linajes() {
  const [Casas, setCasas] = useState([]);  

  useEffect(() => {
   
    getHouses().then((data) => {

      setCasas(data);

    });

  }, []);

  return (
    <>
      <div className="divHead">
       <Buscador />
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
