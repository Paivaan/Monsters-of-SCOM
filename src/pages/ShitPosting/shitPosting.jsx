import React, { useEffect, useState, useContext } from 'react';
import './shitPosting.css';
import coringar from '../../images/shitpost/coringar.jpg'
import styles from '../../components/layout/container.css'

function ShitPosting() {
   return (
      <section className = {styles.container}>
         <h1><span>Bem vindo a ala do ShitPost!</span></h1>
         <p> Vem coringar com a gente, patrão</p>
         <img src = {coringar} alt = "Coringuei" />

      </section>
   );
}
export default ShitPosting;