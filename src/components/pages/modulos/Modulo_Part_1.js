import React, { Component } from "react";
import SgaModulo from "./SgaModulo";

import "../../css/Home.css";

class Modulo_Part_1 extends Component {
  state = {
    environment:this.props.environment,
    urlPrefix:this.props.urlPrefix,
  };

  render() {
    return (
      <div className="div-province-zones">
        <ul className="list">
          <li>
            <SgaModulo
              sga_modulo_description="Gestão Financeira Autárquica" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix}
            />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Gestão de Receitas Autárquicas" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Gestão de Serviços Autárquicos" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Gestão de Informação Geográfica" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
          <li>
            <SgaModulo sga_modulo_description="Ordenamento e Gestão Urbanística" environment = {this.state.environment}
              urlPrefix = {this.state.urlPrefix} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Modulo_Part_1;
