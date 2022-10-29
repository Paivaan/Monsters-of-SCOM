import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, Link } from 'react-router-dom';

import Menu from './pages/Menu/menu';
import JDM from './pages/JDM/jdm';
import ShitPosting from './pages/ShitPosting/shitPosting';
import Agiotage from './pages/Agiotage/agiotage';

import Container from './components/layout/container';

const Rotas = () => {
   return (
      <Router>
         <Link to="/">HOME</Link>
         <Link to="/jdm">JDM</Link>
         <Link to="/agiotage">Agiotagem</Link>
         <Link to="/shit-posting">Diversão</Link>
         <Container>
            <Routes>
               <Route exact path='/' element={<Menu />} />
               <Route path='/jdm' element={<JDM />} />
               <Route path='/shit-posting' element={<ShitPosting />} />
               <Route path='/agiotage' element={<Agiotage />} />
            </Routes>
         </Container>
      </Router>
   );
}
export default Rotas;