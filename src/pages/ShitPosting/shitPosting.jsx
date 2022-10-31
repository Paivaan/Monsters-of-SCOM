import React, { useEffect, useState, useContext} from 'react';
import coringar from '../../images/shitpost/coringar.jpg'
import styles from './shitPosting.module.css'
import fundo from '../../images/shitpost/fundo_shitpost.jpg'
import pancinha from '../../images/shitpost/cachorro_pancinha.png'


function ShitPosting() {
   return (
      <><div style={{ backgroundImage: `url(${fundo})` }}></div>
      <section className= {styles.home_container}>
         <h1>Bem vindo a ala do <span>ShitPost!</span></h1>
         <p> Vem coringar com a gente, patrão</p>
         <img src={coringar} alt="Coringuei" />
         <p>Agora veja esse magnífico cachorro pancinha</p>
         <img src={pancinha} alt="Pancinha" />

      </section></>
   );
}
export default ShitPosting;