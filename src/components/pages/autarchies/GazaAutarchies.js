import React, { Component } from 'react';

import AUTARCHY_BUTTON from "./AutarchyButton";

import BILENE from "../../images/autarquias/logos/gaza/vila_bilene-50x50.png";
import CHOKWE from "../../images/autarquias/logos/gaza/municipio_chokwe-50x50.png";
import MACIA from "../../images/autarquias/logos/gaza/vila_macia-50x50.png";



import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class GazaAutarchies extends Component {

  state = {}

    render() {
        return (
          <div className="div-autarchy">
            <AUTARCHY_BUTTON image={BILENE} autarquia="Autarquia da Vila de Bilene" />
            <AUTARCHY_BUTTON image={CHOKWE} autarquia="Autarquia da Cidade da Chokwé"/>
            <AUTARCHY_BUTTON image={MACIA} autarquia="Autarquia da Vila de Macia"/>
          </div>);
    }

}

export default GazaAutarchies;