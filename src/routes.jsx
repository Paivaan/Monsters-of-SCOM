import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './pages/Menu/menu';

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Menu} />
         </Switch>
      </BrowserRouter>
   );
}