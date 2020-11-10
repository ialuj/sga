import React, { Component } from "react";
import CustomModulo from "./CustomModulo";

import "./css/Home.css";

class SgaModulo extends Component {
 
  state = {
    selectedModulo:""
  };

  addCount = (e) => {
    this.state.selectedModulo = this.props.sga_modulo_description;
  }

  render() {
    return (
      <div onClick={this.addCount}>
        <ul className="list">
          <li>
            <div className="div-modulos">
              {this.props.sga_modulo_description}
            </div>
            <div className="div-space" />
            <CustomModulo
            selectedModulo = {this.state.selectedModulo}
            moduloDescription = {this.props.sga_modulo_description} 
            enviroment = {this.props.environment} 
            url = {this.props.urlPrefix} />
          </li>
        </ul>
      </div>
    );
  }
}

export default SgaModulo;
