import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "./Home";
import Autarquia from "./Autarquia";
import Contacto from "./Contacto";
import Maefp from "./Maefp";
import Mef from "./Mef";
import Producao from "./Producao";
import Treinamento from "./Treinamento";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/autarquias" component={Autarquia} />
          <Route path="/contactos" component={Contacto} />
          <Route path="/maefp" component={Maefp} />
          <Route path="/mef" component={Mef} />
          <Route path="/producao" component={Producao} />
          <Route path="/treinamento" component={Treinamento} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
