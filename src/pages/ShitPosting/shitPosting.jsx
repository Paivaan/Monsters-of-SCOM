import React, { useEffect, useState, useContext } from 'react'
import axios from '../../services/axiosTabela'
import styles from './shitPosting.module.css'
import coringar from '../../images/shitpost/coringar.jpg'

import fundo from '../../images/shitpost/fundo_shitpost.jpg'
import pancinha from '../../images/shitpost/cachorro_pancinha.png'
import Piadocas from '../../components/piadocas/formulario.js'

function ShitPosting() {

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
                <h1>Bem vindo ao Beco do Coringa</h1>
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

            <div className= {styles.piadas}>
            <h1>Mural das piadocas</h1>
            {piadas && piadas.map(function (lista) {
                     return (
                        <div className={styles.boxPiada}>
                            <div className={styles.tituloPiada}>{lista.titulo}</div>
                            <div className={styles.conteudoPiada}>{lista.piada}</div>
                            <div className={styles.nivelPiada}>{lista.nivel}</div>
                        </div>
                     )
                  })
                  }
            </div>
        </>
    );
}
export default ShitPosting;