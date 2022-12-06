import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.css'
import Signin from '../../components/signin/signin.js'
import axios from '../../services/axiosTabela'

async function postUser(body) {
   try {
      const respostasPost = await axios.post('/users', body)
      alert("Usuário Registrado!")
      window.location.reload()
   } catch (err) {
      if (err?.response?.data.error) alert(err.response.data.error)
      else alert(err.message)
   }
}

function SignIn() {
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
            <h1 style={{ color: "#fff", backgroundColor: "#0a90d393", marginBottom: "15px" }}>Faça seu cadastro</h1>
            <Signin startPost={body => postUser(body)} />
         </div>

      </div>
   )
}

export default SignIn;