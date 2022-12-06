import React, { useState, useEffect } from 'react';
import AllRotas from './routes'

import { SignedConxtext } from './contexts/SignedContext';
import { SelfDestructionContext } from './contexts/SelfDestructionContext';

export default function App() {

   const [signed, setSigned] = useState(false);
   const [delet, setDelet] = useState(false);

   function getSigned() {
      const chave = JSON.parse(localStorage.getItem("chave"))
      if (chave)
         setSigned(chave)
   }

   useEffect(() => {
      getSigned()
   }, []);

   return (
      <SelfDestructionContext.Provider value={{ delet, setDelet }}>
         <SignedConxtext.Provider value={{ signed, setSigned }}>
            <AllRotas />
         </SignedConxtext.Provider>
      </SelfDestructionContext.Provider>
   )
};
