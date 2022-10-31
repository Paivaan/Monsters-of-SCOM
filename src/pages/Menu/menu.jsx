import React, { useEffect, useState, useContext, li } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import city from '../../images/map_final.png';
import teste from '../../images/dolar_png.png';


function Menu() {
   return (
      <>
         <div>
            <img src={city} alt="City" />

            <div>
               <img src={teste} alt="teste" />
            </div>
         </div>
      </>
   );
}
export default Menu;