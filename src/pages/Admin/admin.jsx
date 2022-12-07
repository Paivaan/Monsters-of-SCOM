import React, { useState, useContext, useEffect } from 'react';
import './admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelfDestructionContext } from "../../contexts/SelfDestructionContext"
import finalgif from "../../images/finalgif.gif"

function Admin() {

   const { setDelet } = useContext(SelfDestructionContext)

   function goodBye() {
      setDelet(true)
      localStorage.setItem("rip", true)
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
   }

   let whysoserious = ":)"

   return (

      <div>

         <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em"
         }}>

            <p></p>

            <h1 className='introducao'>Bem-vindo a tela dos admnis</h1>
            <h5 className='introducao'>A vida é um grande jogo de xadrez, mova a rainha de forma equivocada e perderá o jogo. Andamos numa corda bamba entre a vida e a morte, entre o certo e o errado, entre ser aplaudido e vaiado. Nessa seção, ignore tudo isso. Quebre a banca, derrube a mesa e os pilares da moral.</h5>
            <h4 className='introducao'>Nessa tela você você irá dar um fim a esse site pífio!</h4>
            <h4 className='introducao'>Não hesite, tudo é uma cópia, da cópia da cópia.</h4>
            <h4 className='introducao'>Só depois de perdermos tudo, é que estamos livres para fazer qualquer coisa.</h4>
     
            <a href="https://drive.google.com/uc?id=1rzx3L3JxjYUz_w4r2GbrwRxCOgHp-4DG&export=download" download>
               <button style={{
                  backgroundColor: "#ff0000",
                  color: "#fff",
                  padding: "2em 3em",
                  borderRadius: "0.5em",
                  textDecoration: "none",
                  transition: "0.5s",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "1px 3px 8px #fff",
               }}
                  onClick={goodBye}>
                  {whysoserious}
               </button>
            </a>
            
            <p></p>
            <p></p>
            <p></p>

            <img style={{ borderRadius: "8px", boxShadow: "1px 3px 8px #fff",}} src={finalgif} alt="gid" />

         </div>

      </div>
   )
}

export default Admin;