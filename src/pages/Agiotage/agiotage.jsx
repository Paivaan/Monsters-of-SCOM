import React, { useEffect, useState, useContext } from 'react';
import './agiotage.css';
import { BiSearchAlt } from "react-icons/bi";

function Agiotage() {
   return (
      <div className='container_agiotage'>
         <h1 className='title'>
            Procure seu Inadimplente:
         </h1>
         <div className='containerInput'>
            <input type="text" placeholder='Digite o CEP do malandro:' />
            <button className='buttonCEP'>
               Procurar
               <BiSearchAlt size={20} />
            </button>
         </div>
         <main className='main'>
            <h2>CEP: 7987456123</h2>
            <span>Rua: DASDASC</span>
            <span>Complemento: afads</span>
            <span>Bairro</span>
            <span>Anápolis - GO</span>
         </main>

      </div>
   );
}
export default Agiotage;