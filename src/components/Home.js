import React, { Component } from "react";

import APRESENTACAO from "./images/apresentacao_portal.gif";

import "./css/Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="div-home">
          <img src={APRESENTACAO} alt="" className="image" />
        </div>
      </>
    );
  }
}

export default Home;
