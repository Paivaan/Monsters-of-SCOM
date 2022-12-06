import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogIn from "../pages/LogIn/LogIn";
import SignIn from "../pages/SignIn/SignIn";


import Container from '../components/container/container';

const AuthRotas = () => {
   return (
      <Router>
         <Container customClass="min-height">
            <Routes>
               <Route exact path='/' element={<LogIn />} />
               <Route path="/signin" element={<SignIn />} />
            </Routes>
         </Container>
      </Router>
   );
}
export default AuthRotas;