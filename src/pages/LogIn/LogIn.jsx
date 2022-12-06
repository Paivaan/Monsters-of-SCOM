import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/nav-icon.png'
import './LogIn.css'

function LogIn() {

   const navigate = useNavigate();

   const SignIn = () => {
      navigate("/signin")
   }

   return (

      <div>
         <button onClick={SignIn}>Clica aqui meu chapa!</button>
      </div>
   
   )
}

export default LogIn;