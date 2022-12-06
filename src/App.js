import React, { useState, useEffect } from 'react';
import AllRotas from './routes'

import { SignedConxtext } from './contexts/SignedContext';


export default function App() {
   
   const [signed, setSigned] = useState(false);
   
   function getSigned() {
      const chave = JSON.parse(localStorage.getItem("chave"))
      if (chave)
      setSigned(chave)
   }

   useEffect(() => {
      getSigned()
   }, []);

   return (
      <SignedConxtext.Provider value={{ signed, setSigned}}>
         <AllRotas />
      </SignedConxtext.Provider>
   )
};
