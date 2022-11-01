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
      </>
   );
}
export default ShitPosting;