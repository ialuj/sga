import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class NorthZone extends Component {
  constructor() {
    super();
    this.state = {
      showNampulaAutarchies: false,
      showCaboDelgadoAutarchies: false,
      showNiassaAutarchies: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent = (province) => {
    switch (province) {
      case "Nampula":
        this.setState({
          showNampulaAutarchies: !this.state.showNampulaAutarchies,
          showCaboDelgadoAutarchies: false,
          showNiassaAutarchies: false,
        });
        break;
      case "Cabo Delgado":
        this.setState({
          showNampulaAutarchies: false,
          showCaboDelgadoAutarchies: !this.state.showCaboDelgadoAutarchies,
          showNiassaAutarchies: false,
        });
        break;
      case "Niassa":
        this.setState({
          showNampulaAutarchies: false,
          showCaboDelgadoAutarchies: false,
          showNiassaAutarchies: !this.state.showNiassaAutarchies,
        });
        break;
      default:
    }
  };

  render() {
    return (
      <div className="div-province-zones">
        <ul className="list">
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Nampula")}
            >
              Mostrar Autarquias de Nampula
            </button>
            {this.state.showNampulaAutarchies && <h3>Autarquias de Nampula</h3>}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Cabo Delgado")}
            >
              Mostrar Autarquias de Cabo Delgado
            </button>
            {this.state.showCaboDelgadoAutarchies && (
              <h3>Autarquias de Cabo Delgado</h3>
            )}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Niassa")}
            >
              Mostrar Autarquias de Niassa
            </button>
            {this.state.showNiassaAutarchies && <h3>Autarquias de Niassa</h3>}
          </li>
        </ul>
      </div>
    );
  }
}

export default NorthZone;
