import React, { useEffect, useState, useContext } from 'react';
import './agiotage.css';
import { BiSearchAlt } from "react-icons/bi";

function Agiotage() {
   return (
      <div className='container'>
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
      </div>
   );
}
export default Agiotage;