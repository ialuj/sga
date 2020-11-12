import React, { Component } from "react";
import SgaModulo from "./SgaModulo";

import "../../css/Home.css";

class Modulo_Part_2 extends Component {
  state = {
    environment:this.props.environment,
    urlPrefix:this.props.urlPrefix,
  };

  render() {
    return (
      <div className="div-province-zones">
        <ul className="list">
        <li>
            <SgaModulo sga_modulo_description="Gestão da Organização e Conhecimento" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Gestão de Serviços Urbanos e Ambiente" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Gestão da Polícia e Fiscalização Autárquica" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Apoio à Governação" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Gestão Relacional" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Modulo_Part_2;
