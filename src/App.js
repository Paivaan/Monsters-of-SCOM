import React, { useState } from 'react';
import AllRotas from './routes'

import { SignedConxtext } from './contexts/SignedContext';


export default function App() {
   const [signed, setSigned] = useState(false);

   return (
      <SignedConxtext.Provider value={{ signed, setSigned}}>
         <AllRotas />
      </SignedConxtext.Provider>
   )
};
