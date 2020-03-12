import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Paciente from "./pages/paciente";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/paciente/:id" component={Paciente} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
