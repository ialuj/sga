import React, { Component } from "react";

import MODULES from "./Modules";

import "../../css/Home.css";

class SgaModulo extends Component {
 
  constructor() {
    super();
    this.state = {
      selectedModulo:"",
      showModule: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent = (event) => {
    this.setState({selectedModulo: this.props.sga_modulo_description,
    showModule: !this.state.showModule});
  }

  render() {
    return (
      <div onClick={this.hideComponent}>
        <ul className="list">
          <li>
            <div className="div-modulos">
              {this.props.sga_modulo_description}
            </div>
            {this.state.showModule && <MODULES selectedModulo = {this.props.sga_modulo_description} href = {this.props.href} />}           
          </li>
        </ul>
      </div>
    );
  }
}

export default SgaModulo;
