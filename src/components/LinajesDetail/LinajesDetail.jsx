import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Castillito from "../../shared/Castillito/Castillito";
import Idiomas from "../../shared/Idiomas/Idiomas";
import "./LinajesDetail.scss";
import Volver from '../../shared/Volver/Volver'
import SimpleBar from "simplebar-react";
import  'simplebar/src/simplebar.css' ;



const LinajesDetail = () => {
    let { name } = useParams("name");
    const [Linaje, setLinaje] = useState([]);
    const personaje = false;

    const getLineDetail = async (name) => {
        const res = await axios("https://api.got.show/api/show/houses/" + name)
        setLinaje(res.data)
        // console.log(setLinaje)
      }
      // console.log(Linaje);

      useEffect(() => {

        getLineDetail(name);
      
          },[name]);
        
    return (
      <>
        <div className="header">
                <Volver personaje={personaje}/>
                <div className="derecha">
                    <Castillito />
                    <Idiomas />
                </div>
        </div>
        
          {Linaje.map((house) =>(
            <div className="containerHouse" key={house._id}>
            <div className="contEsc">
              {house.logoURL ? (<img className="imgHouse" src={house.logoURL} alt={house.name}/>) :
              (<img className="imgHouse" src="/got-house.png" alt="imagen rota"/>) }
              <h2 className="h2Hous">{house.name}</h2>
            </div>

            <ul className="ulDetail">

          
              <li className="liCont">
                <h4 className="h4Title">LEMA</h4>
              <SimpleBar className='barra' style={{ maxHeight: 200, maxWidth: 200 }}>
                <div>
                  {house.words ? (<p className="pText">{house.words}</p>):
                  (<p className="pText">does not contain slogan</p>)}
                </div>
              </SimpleBar>
              </li>
           

            
              <li className="liCont">
                <h4 className="h4Title">SEDE</h4>
              <SimpleBar className='barra' style={{ maxHeight: 200, maxWidth: 200 }}>
                <div>
                {(house.seat.length > 0 ) ? (house.seat.map((set, index) => 

                <p className="pText" key={index}>{set}</p>   
                )) : (<p className="pText">is not based</p>)} 
                  </div>
              </SimpleBar>
              </li>
            

            
              <li className="liCont">
                <h4 className="h4Title">REGION</h4>
              <SimpleBar className='barra' style={{ maxHeight: 200 }}>
                <div>
                {(house.region.length > 0 ) ? (house.region.map((reg, index)=>(
                  <p className="pText" key={index} >{reg}</p>
                  ))) : (<p className="pText">contains no region</p>)}
                </div>
              </SimpleBar>
              </li>
            

            
              <li className="liCont">
                <h4 className="h4Title">ALIANZAS</h4>
              <SimpleBar className='barra' style={{ maxHeight: 200 }}>
                <div>
                {(house.allegiance.length > 0 ) ? (house.allegiance.map((alle, index)=>(
                  <p className="pText" key={index} >{alle}</p>
                  ))) : (<p className="pText">does not contain alliances</p>)}
                  </div>
              </SimpleBar>
              </li>
            

            
              <li className="liCont">
                <h4 className="h4Title">RELIGIONES</h4>
              <SimpleBar className='barra' style={{ maxHeight: 200 }}>
                <div>
                {(house.religion.length > 0 ) ? (house.religion.map((relig, index)=>(
                  <p className="pText" key={index} >{relig}</p>
                  ))) : (<p className="pText">does not contain religions</p>)}
                  </div>
              </SimpleBar>  
              </li>
            

              <li className="liCont">
                <h4 className="h4Title">FUNDACION</h4>
                <p className="pText">{house.createdAt.substr(0,10)}</p>
              </li>
            </ul>

            </div>
          ))}
        
        </>
    );
};

export default LinajesDetail;


