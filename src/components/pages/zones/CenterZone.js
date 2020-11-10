import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class CenterZone extends Component {
  constructor() {
    super();
    this.state = {
      showSofalaAutarchies: false,
      showManicaAutarchies: false,
      showZambeziaAutarchies: false,
      showTeteAutarchies: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent = (province) => {
    switch (province) {
      case "Sofala":
        this.setState({
          showSofalaAutarchies: !this.state.showSofalaAutarchies,
          showManicaAutarchies: false,
          showZambeziaAutarchies: false,
          showTeteAutarchies: false,
        });
        break;
      case "Manica":
        this.setState({
          showSofalaAutarchies: false,
          showManicaAutarchies: !this.state.showManicaAutarchies,
          showZambeziaAutarchies: false,
          showTeteAutarchies: false,
        });
        break;
      case "Zambezia":
        this.setState({
          showSofalaAutarchies: false,
          showManicaAutarchies: false,
          showZambeziaAutarchies: !this.showZambeziaAutarchies,
          showTeteAutarchies: false,
        });
        break;
      case "Tete":
        this.setState({
          showSofalaAutarchies: false,
          showManicaAutarchies: false,
          showZambeziaAutarchies: false,
          showTeteAutarchies: !this.state.showTeteAutarchies,
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
              onClick={() => this.hideComponent("Sofala")}
            >
              Mostrar Autarquias de Sofala
            </button>
            {this.state.showSofalaAutarchies && <h3>Autarquias de Sofala</h3>}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Manica")}
            >
              Mostrar Autarquias de Manica
            </button>
            {this.state.showManicaAutarchies && <h3>Autarquias de Manica</h3>}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Zambezia")}
            >
              Mostrar Autarquias de Zambezia
            </button>
            {this.state.showZambeziaAutarchies && (
              <h3>Autarquias de Zambezia</h3>
            )}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Tete")}
            >
              Mostrar Autarquias de Tete
            </button>
            {this.state.showTeteAutarchies && <h3>Autarquias de Tete</h3>}
          </li>
        </ul>
      </div>
    );
  }
}

export default CenterZone;
