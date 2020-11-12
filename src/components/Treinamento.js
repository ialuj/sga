import React, { Component } from "react";

import MAIN_MODULO from "./pages/modulos/MainModule";

import "./css/Home.css";

class Treinamento extends Component {
  state = {
    environment: "TRN",
    urlPrefix: "trn",
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

export default Treinamento;
