import React, { Component } from "react";

import MODULO_PART_1 from "./Modulo_Part_1";
import MODULO_PART_2 from "./Modulo_Part_2";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class MainModule extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  decrementCount = () => {
    switch (this.state.count) {
      case 1:
        this.setState({ count: 2 });
        break;
      case 2:
        this.setState({ count: this.state.count - 1 });
        break;
      default:
        this.setState({ count: 1 });
    }
  };

  incrementCount = () => {
    switch (this.state.count) {
      case 1:
        this.setState({ count: this.state.count + 1 });
        break;
      case 2:
        this.setState({ count: 1 });
        break;
      default:
        this.setState({ count: 1 });
    }
  };

  render() {
    return (
      <div className="div-home">
        <div className="div-carossel carousel slide">
          <div className="carousel-inner div-center">
            {this.state.count === 0 && <MODULO_PART_1 environment = {this.props.environment} urlPrefix = {this.props.urlPrefix} /> || this.state.count === 1 && <MODULO_PART_1 environment = {this.props.environment} urlPrefix = {this.props.urlPrefix}/>}
            {this.state.count === 2 && <MODULO_PART_2 environment = {this.props.environment} urlPrefix = {this.props.urlPrefix}/>}
          </div>
          <a className="carousel-control-prev" onClick={this.decrementCount}>
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" onClick={this.incrementCount}>
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    );
  }
}
export default MainModule;
