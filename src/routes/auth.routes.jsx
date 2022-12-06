import React from "react";

import LogIn from "../pages/LogIn/LogIn";
import Landing from "../pages/LandingPage/landing";

import { BrowserRouter as Router, Routes, Route, Redirect, Link } from 'react-router-dom';

const AuthRotas = () => {
   return (
      <Router>
         <NavBar />
         <Container customClass="min-height">
            <Routes>
               <Route exact path='/' element={<Landing />} />
               <Route exact path='/login' element={<LogIn />} />
            </Routes>
         </Container>
         <Footer />
      </Router>
   );
}
export default AuthRotas;