import React, { Component } from 'react';

import AUTARCHY_BUTTON from "./AutarchyButton";

import MATOLA from "../../images/autarquias/logos/maputoprovincia/logo_matola-50x50.jpg";
import BOANE from "../../images/autarquias/logos/maputoprovincia/logo_boane-50X50.gif";


import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class MaputoProvinciaAutarchies extends Component {

  state = {}

    render() {
        return (
          <div className="div-autarchy">
            <AUTARCHY_BUTTON image={MATOLA} autarquia="Autarquia da Cidade da Matola"/>
            <AUTARCHY_BUTTON image={BOANE} autarquia="Autarquia da Vila de Boane"/>
          </div>);
    }

}

export default MaputoProvinciaAutarchies;