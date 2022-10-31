import React, { useEffect, useState, useContext, li } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './menu.css';

function Menu() {

   const navigate = useNavigate();

   const carroNav = () => {
      navigate("/jdm")
   }
   const coringaNav = () => {
      navigate("/shit-posting")
   }
   const agiotaNav = () => {
      navigate("/agiotage")
   }

   return (
      <div>
         
         <div className='carroPai'>
         <div className='icones' id="carro" onClick={carroNav}></div>
         </div>

         <div className='coringaPai'>
         <div className='icones' id="coringa" onClick={coringaNav}></div>
         </div>

         <div className='agiotaPai'>
         <div className='icones' id="agiota" onClick={agiotaNav}></div>
         </div>

         <div className='City'></div>
      </div>
   );
}
export default Menu;