import React, { Component } from "react";

import PROVINCE_BUTTON from "../../ButtonProvincia";
import CENTERZONE from "../../images/centerZone.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class CenterZone extends Component {

  state = {}

  render() {
    return (
      <div className="div-province-zones">
        <ul className="list">
          <li>
            <img src={CENTERZONE} alt="" className="img-zone" />
          </li>
          <li>
            <PROVINCE_BUTTON
              province="Autarquias de Sofala"/>
          </li>
          <li>
            <PROVINCE_BUTTON
              province="Autarquias de Manica"/>
          </li>
          <li>
            <PROVINCE_BUTTON
              province="Autarquias de Zambezia" />
          </li>
          <li>
          <PROVINCE_BUTTON
              province="Autarquias de Tete" />
          </li>
        </ul>
      </div>
    );
  }
}

export default CenterZone;
