import React, { useEffect, useState, useContext} from 'react';
import coringar from '../../images/shitpost/coringar.jpg'
import styles from './shitPosting.module.css'
import fundo from '../../images/shitpost/fundo_shitpost.jpg'
import pancinha from '../../images/shitpost/cachorro_pancinha.png'
import Piadocas from '../../components/piadocas/formulario.js'

function ShitPosting() {
   return (
      <><div style={{ backgroundImage: `url(${fundo})` }}></div>
     
      <section className= {styles.home_container}>
         <h1>Bem vindo a ala do <span>ShitPost!</span></h1>
         <b> Vem coringar com a gente, patrão</b>
         <img src={coringar} alt="Coringuei" />
         <b>Agora veja esse magnífico cachorro pancinha</b>
         <img src={pancinha} alt="Pancinha" />
         <b>Agora que você já se divertiu um pouco sua vez de colaborar com a firma!</b>
         <b>Participe do nosso coletor de piadas e risadas!</b>
      </section>
      <div className= {styles.forms_container}>
         <h1>COLETOR DE PIADAS CORINGA-MASTER 2.0</h1>
         <Piadocas/>
      </div>
      
      <div class="top-bar">
       <div class="container">
           <div class="player-controls">
               <span class="player-prev">Prev</span>
               <span class="player-play">Play</span>
               <span class="player-pause">Pause</span>
               <span class="player-stop">Stop</span>
               <span class="player-next">Next</span>
           </div>
           <div class="player"></div>
           <div class="player-timeline">
               <div class="player-timeline-control"></div>
           </div>
           <div class="player-display">
               Playing: <span class="player-current-track"></span>
           </div>
       </div>
   </div>
      
      </>
   );
}
export default ShitPosting;