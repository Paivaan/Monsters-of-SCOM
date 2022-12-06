import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/nav-icon.png'
import './LogIn.css'

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

   return (

      <div>
         <button onClick={SignIn}>Clica aqui meu chapa!</button>
      </div>
   
   )
}

export default LogIn;