import React, { Component } from 'react';

import AUTARCHY_BUTTON from "./AutarchyButton";

import MAPUTO_CITY from "../../images/autarquias/logos/maputocidade/logo_maputo-50x50.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class MaputoCidadeAutarchies extends Component {

  state = {}

    render() {
        return (
          <div className="div-autarchy">
            <AUTARCHY_BUTTON image={MAPUTO_CITY} autarquia="Autarquia da Cidade de Maputo"/>
          </div>);
    }

}

export default MaputoCidadeAutarchies;