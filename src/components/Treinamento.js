import React, { Component } from "react";
import MainModulo from "./MainModulo";

import "./css/Home.css";

class Treinamento extends Component {
  state = {
    environment: "TRN",
    urlPrefix: "trn",
  };
  render() {
    return (
      <div className="div-home">
        <MainModulo
          environment={this.state.environment}
          urlPrefix={this.state.urlPrefix}
        />
      </div>
    );
  }
}

export default Treinamento;
