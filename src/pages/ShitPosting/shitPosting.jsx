import React, { useEffect, useState, useContext } from 'react';
import coringar from '../../images/shitpost/coringar.jpg'
import styles from './shitPosting.module.css'
import fundo from '../../images/shitpost/fundo_shitpost.jpg'
import pancinha from '../../images/shitpost/cachorro_pancinha.png'
import Piadocas from '../../components/piadocas/formulario.js'
import axios from '../../services/axiosTabela';

function ShitPosting() {
<<<<<<< HEAD

    const [piadas, setPiadas] = useState([]);

    async function getPiadas() {
        try {
            const response = await axios.get("/tabela")
            if (response) {
                setPiadas(response.data)
            }
        } catch (err) {
            if (err?.response?.data.error) alert(err.response.data.error)
            else alert(err.message)
        }
    }

    async function postPiada(body) {
        try {
           const respostasPost = await axios.post('/tabela', body)
        } catch (err) {
           if (err?.response?.data.error) alert(err.response.data.error)
           else alert(err.message)
        }
     }  

    useEffect(() => {
        getPiadas();
     }, [])

    return (
        <><div style={{ backgroundImage: `url(${fundo})` }}></div>

            <section className={styles.home_container}>
                <h1>Bem vindo a ala do <span>ShitPost!</span></h1>
                <b> Vem coringar com a gente, patrão</b>
                <img src={coringar} alt="Coringuei" />
                <b>Agora veja esse magnífico cachorro pancinha</b>
                <img src={pancinha} alt="Pancinha" />
                <b>Agora que você já se divertiu um pouco sua vez de colaborar com a firma!</b>
                <b>Participe do nosso coletor de piadas e risadas!</b>
            </section>
            <div className={styles.forms_container}>
                <h1>COLETOR DE PIADAS CORINGA-MASTER 2.0</h1>
                <Piadocas startPost={body => postPiada(body)}/>
            </div>

            <div>
            {piadas && piadas.map(function (lista) {
                     return (
                        <div>
                            <h1>{lista.titulo}</h1>
                            <h1>{lista.piada}</h1>
                            <h1>{lista.nivel}</h1>
                        </div>
                     )
                  })
                  }
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
=======
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
>>>>>>> 1c4aea86b9d76545e8e7aa96ac7aee938c79944e
}
export default ShitPosting;