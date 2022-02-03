import axios from "axios";
import { useEffect, useState,} from "react";
import {Link} from "react-router-dom";
import "./Linajes.scss";
import Navbar from "../Inicio/Navbar/Navbar";
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import LinajesGallery from "../LinajesGallery/LinajesGallery";

export default function Linajes() {
  const [Casas, setCasas] = useState([]);

  const getLinajes = async () => {
    const res = await axios("https://api.got.show/api/show/houses");
    console.log(res)
    setCasas(res.data);
  };
  

  useEffect(() => {
    getLinajes();
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
