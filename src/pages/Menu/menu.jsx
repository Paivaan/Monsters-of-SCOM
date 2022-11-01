import React, { useEffect, useState, useContext, li } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './menu.css';
import styles from '../ShitPosting/shitPosting.module.css';

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
      <><div>

         <div className='carroPai'>
            <div className='icones' id="carro" onClick={carroNav}></div>
         </div>

         <div className='coringaPai'>
            <div className='icones' id="coringa" onClick={coringaNav}></div>
         </div>

         <div className='agiotaPai'>
            <div className='icones' id="agiota" onClick={agiotaNav}></div>
         </div>

         <div 
            className='City'>
         </div>
      </div>
      
      <div className = {styles.home_container}>
   <p>O mundo atual necessita de mudanças, chega de guerras, desigualdades e atritos políticos
   Se este é problema, que foquemos no que é de nosso amor: Carros JDM, agiotagem e conteúdos non-sense.
   Uma pitada de roncos de poderosos motores, agiotas bolados e conteúdos sem sentido, afinal já dizia 
   Nietzche:</p> 
   
   <p>Aquilo que se faz por amor está sempre além do bem e do mal.</p>

   <p>Sendo assim, vos apresento o nosso mundo ideal.</p>
   </div>
         
      </>
   );
}
export default Menu;