import React, { Component } from "react";
import APRESENTACAO_AU from "./images/apoio_utilizador_portal.gif";

import "./css/Home.css";

class Contacto extends Component {
  
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

  DIV_APRESENTACAO = () => {
    return (
     <div>
       <img src={APRESENTACAO_AU} alt="" className="image" />
     </div>
    );
  }

  DIV_CONTACTOS = () => {
    return (
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
    );
  }

  render() {
    return (
      <div className="div-home">
        <div className="div-carossel carousel slide">
          <div className="carousel-inner div-center">
            {this.state.count === 0 && <this.DIV_APRESENTACAO /> || this.state.count === 1 && <this.DIV_APRESENTACAO />}
            {this.state.count === 2 && <this.DIV_CONTACTOS />}
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

export default Contacto;
