import React, { useEffect, useState, useContext } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './agiotage.css';
import apiCEP from '../../services/axios';


function Agiotage() {

   const [input, setInput] = useState("")
   const [cep, setCep] = useState({})

   async function handleSearch() {
      if (input === "") {
         alert("Me ajude a te ajudar, preencha algum CEP!")
         return;
      }

      try {
         const response = await apiCEP.get(`${input}/json`)
         console.log('response :>> ', response.data);
         setCep(response.data)
         setInput("")
      } catch {
         alert("Eita mano, algum erro aconteceu!")
         setInput("")
      }
   }

   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDtw3t_uAryR2-jJj6V4UBSFKiyruCmRLk"
   })

   return (
      <div className='container_agiotage'>
         <h1 className='title'>
            Procure seu Inadimplente:
         </h1>
         <div className='containerInput'>
            <input type="text" placeholder='Digite o CEP do malandro:' value={input} onChange={(e) => setInput(e.target.value)} />
            <button className='buttonCEP' onClick={handleSearch}>
               Procurar
               <BiSearchAlt size={20} />
            </button>
         </div>

         {Object.keys(cep).length > 0 && (
            <main className='main'>
               <h2>CEP: {cep.cep}</h2>
               <span>Complemento: {cep.complemento}</span>
               <span>{cep.bairro}</span>
               <span>{cep.localidade} - {cep.uf}</span>
            </main>
         )}


         <div className='map'>
            {isLoaded ? (
               <GoogleMap
                  mapContainerStyle={{width: "80%", height: "80%"}}
                  center={{
                     lat: -23.479512611670835,
                     lng: -47.417083192319836
                  }}
                  zoom={15}
               >
   
               </GoogleMap>
            ): <></>}
         </div>
      </div>
   )
};

export default Agiotage;