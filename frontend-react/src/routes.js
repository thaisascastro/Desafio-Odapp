import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Paciente from "./pages/paciente";
import Form from './pages/form';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/paciente" component={Form} />
      <Route path="/paciente/:id" component={Paciente} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
