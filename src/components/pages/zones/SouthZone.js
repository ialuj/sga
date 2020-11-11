import React, { Component } from "react";

import PROVINCE_BUTTON from "../../ButtonProvincia";
import SOUTHZONE from "../../images/southZone.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class SouthZone extends Component {

 state = {}

  render() {
    return (
      <div className="div-province-zones">
        <ul className="list">
          <li>
            <img src={SOUTHZONE} alt="" className="img-zone" />
          </li>
          <li>
            <PROVINCE_BUTTON
              province="Autarquias de Maputo Cidade"/>
          </li>
          <li>
            <PROVINCE_BUTTON
              province="Autarquias de Maputo Provincia"/>
          </li>
          <li>
            <PROVINCE_BUTTON
              province="Autarquias de Gaza" />
          </li>
          <li>
          <PROVINCE_BUTTON
              province="Autarquias de Inhambane" />
          </li>
        </ul>
      </div>
    );
  }
}

export default SouthZone;
