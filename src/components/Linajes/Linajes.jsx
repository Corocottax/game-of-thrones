import { useEffect, useState,} from "react";
import {Link} from "react-router-dom";
import "./Linajes.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import LinajesGallery from "../LinajesGallery/LinajesGallery";
import { getHouses } from "../../functions/Functions";

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
          <Link to="/Inicio">🡰Volver</Link>
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
