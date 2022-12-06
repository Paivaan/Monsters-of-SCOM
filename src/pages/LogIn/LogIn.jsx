import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/nav-icon.png'
import styles from './LogIn.css'
import Login from '../../components/login/login.js'

function LogIn() {

   const navigate = useNavigate();

   const [user, setUser] = useState("");
   const [password, setPassword] = useState();

   const SignIn = () => {
      navigate("/signin")
   }

   async function login() {
      if (!user || !password) alert("ME AJUDA AE NÉ PAE")
   }

   async function setUserPassword(body) {
      setUser(body.user)
      setPassword(body.password)
  }

   return (

      <div>
         <div className={styles.forms_container}>
            <h1 >Faça seu login</h1>
            <Login startPost={body => setUserPassword(body)}/>
         </div>

         <button onClick={SignIn}>Clica aqui meu chapa!</button>
      </div>

   )
}

export default LogIn;