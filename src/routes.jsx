import React from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

import Menu from './pages/Menu/menu';

const Rotas = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path='/' element={<Menu/>} />
         </Routes>
      </BrowserRouter>
   );
}
export default Rotas;