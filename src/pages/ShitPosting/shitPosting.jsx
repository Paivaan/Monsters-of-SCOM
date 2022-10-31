import React, { useEffect, useState, useContext } from 'react';
import coringar from '../../images/shitpost/coringar.jpg'

function ShitPosting() {
   return (
      <section>
         <h1><span>Bem vindo a ala do ShitPost!</span></h1>
         <p> Vem coringar com a gente, patrão</p>
         <img src = {coringar} alt = "Coringuei" />

      </section>
   );
}
export default ShitPosting;