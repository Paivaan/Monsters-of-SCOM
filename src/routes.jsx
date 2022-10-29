import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './pages/Menu/menu';

export default function Routes() {
   return (
      <BrowserRouter>
         <Route path="/" exact component={Menu} />
      </BrowserRouter>
   );
}