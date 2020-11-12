import React, { Component } from "react";

import MAIN_MODULO from "./pages/modulos/MainModule";

import "./css/Home.css";

class Producao extends Component {
  state = {
    environment: "PROD",
    urlPrefix: "prd",
  };
  render() {
    return (
      <div className="div-home">
        <MAIN_MODULO
          environment={this.state.environment}
          urlPrefix={this.state.urlPrefix}
        />
      </div>
    );
  }
}

export default Producao;
