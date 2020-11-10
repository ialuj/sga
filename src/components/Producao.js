import React, { Component } from "react";
import MainModulo from "./MainModulo";

import "./css/Home.css";

class Producao extends Component {
  state = {
    environment: "PROD",
    urlPrefix: "prd",
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

export default Producao;
