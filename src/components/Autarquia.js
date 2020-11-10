import React, { Component } from "react";

import SouthZone from "./pages/zones/SouthZone";
import CenterZone from "./pages/zones/CenterZone";
import NorthZone from "./pages/zones/NorthZone";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";

class Autarquia extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.setState({ count: 1 });
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  decrementCount = () => {
    switch (this.state.count) {
      case 1:
        this.setState({ count: 3 });
        break;
      case 2:
        this.setState({ count: this.state.count - 1 });
        break;
      case 3:
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
        this.setState({ count: this.state.count + 1 });
        break;
      case 3:
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
            {this.state.count === 1 && <SouthZone />}
            {this.state.count === 2 && <CenterZone />}
            {this.state.count === 3 && <NorthZone />}
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
export default Autarquia;
