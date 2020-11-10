import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Home.css";

class CustomButtonModulo extends Component {
    state = {};
    render() {
      return (
          <div>
              <button className="btn btn-success button-style">{this.props.modulo}</button>
          </div>
      );
    }
}

export default CustomButtonModulo;
