import React, { Component } from "react";
import APRESENTACAO_AU from "./images/apoio_utilizador_portal.gif";

import "./css/Home.css";

class Contacto extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="div-home div-scroll">
          <ul className="list">
            <li>
          <img src={APRESENTACAO_AU} alt="" className="image" />
          <div className="div-space" />
          </li>
          <li>
           <div className="div-user-help">
             <p><span className="span-class">Contactos de Service Desk e Apoio Funcional:</span></p>
             <p><span className="span-class">Celular</span></p>
             <p><span className="span-content"> +258 84 67 93 603</span></p>
             <p><span className="span-class">Fax</span></p>
             <p><span className="span-content">21 30 97 84</span></p>
             <p><span className="span-class">Email</span></p>
             <p><span className="span-content span-user-help">apoio.utilizador@cedsif.gov.mz</span></p>
             <p><span className="span-class">Linha de Apoio ao Utilizador</span></p>
             <p><span className="span-content">1444</span></p>
           </div>
          </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Contacto;
