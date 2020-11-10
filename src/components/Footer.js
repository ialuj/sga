import React, { Component } from "react";

import IMAGE from "./images/footer_line.png";
import LOGO_CEDSIF from "./images/logo_cedsif.png";

import "./css/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="div-footer">
        <ul className="list">
          <li>
            <div className="div-footer">
              <img src={IMAGE} alt="" className="img-footer" />
            </div>
          </li>
          <li>
            <a
              href="https://www.cedsif.gov.mz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div-footer">
                <img src={LOGO_CEDSIF} alt="" className="img-footer" />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.cedsif.gov.mz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="div-copyright">
                <span className="span-cedsif">
                  CEDSIF | Centro de Desenvolvimento de Sistemas de Informação e
                  Finanças
                </span>
              </div>
            </a>
          </li>
          <li>
            <div className="div-space" />
          </li>
          <li>
            <div
              className="div-copyright"
            >
              <span>Copyright © 2019 CEDSIF</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
