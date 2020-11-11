import React, { Component } from "react";

import PROVINCE_BUTTON from "../../ButtonProvincia";
import NORTHZONE from "../../images/northZone.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class NorthZone extends Component {
 
  state = {}

  render() {
    return (
      <div className="div-province-zones">
      <ul className="list">
        <li>
          <img src={NORTHZONE} alt="" className="img-zone" />
        </li>
        <li>
          <PROVINCE_BUTTON
            province="Autarquias de Nampula"/>
        </li>
        <li>
          <PROVINCE_BUTTON
            province="Autarquias de Cabo Delgado"/>
        </li>
        <li>
          <PROVINCE_BUTTON
            province="Autarquias de Niassa" />
        </li>
      </ul>
    </div>
    );
  }
}

export default NorthZone;
