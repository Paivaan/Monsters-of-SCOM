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
         <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em"

         }}>
            
            <h1 style={{ color: "#fff", backgroundColor: "#0a90d393", marginBottom: "15px" }}>Faça seu login</h1>
            
            <Login startPost={body => setUserPassword(body)} />
         
         </div>

      </div>

   )
}

export default LogIn;