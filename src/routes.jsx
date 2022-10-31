import React from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect, Link } from 'react-router-dom';

import Menu from './pages/Menu/menu';
import JDM from './pages/JDM/jdm';
import ShitPosting from './pages/ShitPosting/shitPosting';
import Agiotage from './pages/Agiotage/agiotage';

import Container from './components/container/container';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';

const Rotas = () => {
   return (
      <Router>
         <NavBar />
         <Container>
            <Routes>
               <Route exact path='/' element={<Menu />} />
               <Route path='/jdm' element={<JDM />} />
               <Route path='/shit-posting' element={<ShitPosting />} />
               <Route path='/agiotage' element={<Agiotage />} />
            </Routes>
         </Container>
         <Footer />
      </Router>
   );
}
export default Rotas;