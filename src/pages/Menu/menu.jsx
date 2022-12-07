import React, { useEffect, useState, useContext, li } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCLS } from 'web-vitals';
import './menu.css';



function Menu() {

   const navigate = useNavigate();
   const [user, setUser] = useState("");
   const [cargo, setCargo] = useState("");

   const carroNav = () => {
      navigate("/jdm")
   }
   const coringaNav = () => {
      navigate("/shit-posting")
   }
   const agiotaNav = () => {
      navigate("/agiotage")
   }
   const adminNav = () => {
      navigate("/admin")
   }

   function getCLS() {
      const userPost = JSON.parse(localStorage.getItem("userPost"))
      if (userPost) {
         setUser(userPost.usuario)
         setCargo(userPost.cargo)
      }
   }

   useEffect(() => {
      getCLS()
   }, []);

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

         {cargo === "admin" ? <div className='adminPai'>
            <div className='icones' id="admin" onClick={adminNav}></div>
         </div> : null}

         <div
            className='City'>
         </div>
      </div>

         <div className="container">

            <h4 className='introducao' >O mundo atual necessita de mudanças, chega de guerras, desigualdades e atritos políticos
               Se este é problema, que foquemos no que é de nosso amor: Carros JDM, agiotagem e conteúdos non-sense.
               Uma pitada de roncos de poderosos motores, agiotas bolados e conteúdos sem sentido, afinal já dizia
               Nietzche:</h4>
            <p></p>
            <h3 className='introducao'>Aquilo que se faz por amor está sempre além do bem e do mal.</h3>
            <p></p>
            <h2 className='introducao'>Sendo assim, {user}, lhe apresento o nosso mundo ideal.</h2>
         </div>
      </>
   );
}
export default Menu;