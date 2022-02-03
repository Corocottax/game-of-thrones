import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import "./LinajesDetail.scss"



const LinajesDetail = () => {
    let { name } = useParams("name");
    const [Linaje, setLinaje] = useState([]);

    const getLineDetail = async (name) => {
        const res = await axios("https://api.got.show/api/show/houses/" + name)
        setLinaje(res.data)
        console.log(setLinaje)
      }
      console.log(Linaje);

      useEffect(() => {

        getLineDetail(name);
      
          },[name]);
       

    //   useEffect(() => {
    //     if (name)
    //     getLineDetail(name).then((data) => {
    //         setLinaje(data);
    //       });
    //   }, []);

      
    return (
      <>
        <div className="divHead">
            <Link to="/linajes">🡰Volver</Link>
          <figcaption className="casLen" >
            <Castillito />
            <Idiomas />
          </figcaption>
        </div>
        <div className="containerHouse">
          {Linaje.map((house) =>(
            <>
            <div className="contEsc" key={house.name}>
              {house.logoURL ? (<img className="imgHouse" src={house.logoURL} alt={house.name}/>) :
              (<img className="imgHouse" src="/got-house.png" alt="imagen rota"/>) }
              <h2 className="h2Hous">{house.name}</h2>
            </div>

            <ul className="ulDetail">
              <li className="liCont">
                <h4 className="h4Title">LEMA</h4>
                <p className="pText" >{house.words}</p>
              </li>

              <li className="liCont">
                <h4 className="h4Title">SEDE</h4>
                <p className="pText">{house.seat}</p>
              </li>

              <li className="liCont">
                <h4 className="h4Title">REGION</h4>
                <p className="pText">{house.region}</p>
              </li>

              <li className="liCont">
                <h4 className="h4Title">ALIANZAS</h4>
                {house.allegiance.map((alle)=>(
                  <p className="pText" key={alle} >{alle}</p>
                  ))}
              </li>

              <li className="liCont">
                <h4 className="h4Title">RELIGIONES</h4>
                <p className="pText">{house.religion}</p>
              </li>

              <li className="liCont">
                <h4 className="h4Title">FUNDACION</h4>
                <p className="pText">{house.createdAt.substr(0,10)}</p>
              </li>
            </ul>

            </>
          ))}
        </div>
        </>
    );
};

export default LinajesDetail;

