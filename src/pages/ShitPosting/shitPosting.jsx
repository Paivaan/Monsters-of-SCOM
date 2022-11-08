import React, { useEffect, useState, useContext } from 'react'
import axios from '../../services/axiosTabela'
import styles from './shitPosting.module.css'

import coringar from '../../images/shitpost/coringar.jpg'
import fundo from '../../images/shitpost/fundo_shitpost.jpg'
import pancinha from '../../images/shitpost/cachorro_pancinha.png'
import Piadocas from '../../components/piadocas/formulario.js'

import add1 from '../../images/add_1.png'
import add2 from '../../images/add_2.jpg'
import add3 from '../../images/ad_3.jpeg'
import add4 from '../../images/add_4.jpeg'
import add5 from '../../images/add_5.jpg'

import Modal from '../../components/modal/modal'

function ShitPosting() {

    const [piadas, setPiadas] = useState([]);
    const [modal, setModal] = useState(false);
    const [case1, setCase1] = useState(false);
    const [case2, setCase2] = useState(false);
    const [case3, setCase3] = useState(false);
    const [case4, setCase4] = useState(false);
    const [case5, setCase5] = useState(false);

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
            alert("Piadoca Registrada!")
            window.location.reload()
        } catch (err) {
            if (err?.response?.data.error) alert(err.response.data.error)
            else alert(err.message)
        }
    }

    useEffect(() => {
        getPiadas();

        setTimeout(() => {
            setModal(true)
            setCase1(true)
        }, 8000);

        setTimeout(() => {
            setCase1(false)
            setModal(true)
            setCase2(true)
        }, 15000);

        setTimeout(() => {
            setCase2(false)
            setModal(true)
            setCase3(true)
        }, 18000);

        setTimeout(() => {
            setCase3(false)
            setModal(true)
            setCase4(true)
        }, 21000);

        setTimeout(() => {
            setCase4(false)
            setModal(true)
            setCase5(true)
        }, 24000);

        setTimeout(() => {
            setCase5(false)
        }, 27000);

    }, [])

    return (
        <><div style={{ backgroundImage: `url(${fundo})` }}></div>
            {case1 && (<Modal trigger={modal} setTrigger={setModal}>
                <img src={add1} alt="add1" />
            </Modal>)}
            {case2 && (<Modal trigger={modal} setTrigger={setModal}>
                <img src={add2} alt="add2" />
            </Modal>)}
            {case3 && (<Modal trigger={modal} setTrigger={setModal}>
                <img src={add3} alt="add3" />
            </Modal>)}
            {case4 && (<Modal trigger={modal} setTrigger={setModal}>
                <img src={add4} alt="add4" />
            </Modal>)}
            {case5 && (<Modal trigger={modal} setTrigger={setModal}>
                <img src={add5} alt="add5" />
            </Modal>)}
            <section className={styles.home_container}>
                <h1>Bem vindo ao Beco do Coringa</h1>
                <b> Vem <a href="https://www.dicionarioinformal.com.br/coringar/#:~:text=1.,Coringar&text=G%C3%ADria%2C%20usada%20por%20jovens%20que,e%20viol%C3%AAncia%20extrema%20parecem%20dissociados." target="_blank" rel="noreferrer">coringar</a> com a gente, patrão</b>
                <img src={coringar} alt="Coringuei" />
                <b>Agora veja esse magnífico cachorro pancinha</b>
                <img src={pancinha} alt="Pancinha" />
                <b>Agora que você já se divertiu um pouco sua vez de colaborar com a firma!</b>
                <b>Participe do nosso coletor de piadas e risadas!</b>
            </section>
            <div className={styles.forms_container}>
                <h1>COLETOR DE PIADAS CORINGA-MASTER 2.0</h1>
                <Piadocas startPost={body => postPiada(body)} />
            </div>

            <div className={styles.piadas}>
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