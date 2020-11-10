import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class SouthZone extends Component {
  constructor() {
    super();
    this.state = {
      showMaputoCidadeAutarchies: false,
      showMaputoProvinciaAutarchies: false,
      showGazaAutarchies: false,
      showInhambaneAutarchies: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent = (province) => {
    switch (province) {
      case "Maputo Cidade":
        this.setState({
          showMaputoCidadeAutarchies: !this.state.showMaputoCidadeAutarchies,
          showMaputoProvinciaAutarchies: false,
          showGazaAutarchies: false,
          showInhambaneAutarchies: false,
        });
        break;
      case "Maputo Provincia":
        this.setState({
          showMaputoCidadeAutarchies: false,
          showMaputoProvinciaAutarchies: !this.state
            .showMaputoProvinciaAutarchies,
          showGazaAutarchies: false,
          showInhambaneAutarchies: false,
        });
        break;
      case "Gaza":
        this.setState({
          showMaputoCidadeAutarchies: false,
          showMaputoProvinciaAutarchies: false,
          showGazaAutarchies: !this.state.showGazaAutarchies,
          showInhambaneAutarchies: false,
        });
        break;
      case "Inhambane":
        this.setState({
          showMaputoCidadeAutarchies: false,
          showMaputoProvinciaAutarchies: false,
          showGazaAutarchies: false,
          showInhambaneAutarchies: !this.state.showInhambaneAutarchies,
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
              onClick={() => this.hideComponent("Maputo Cidade")}
            >
              Mostrar Autarquias de Maputo Cidade
            </button>
            {this.state.showMaputoCidadeAutarchies && (
              <h3>Autarquias de Maputo Cidade</h3>
            )}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Maputo Provincia")}
            >
              Mostrar Autarquias de Maputo Provincia
            </button>
            {this.state.showMaputoProvinciaAutarchies && (
              <h3>Autarquias de Maputo Provincia</h3>
            )}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Gaza")}
            >
              Mostrar Autarquias de Gaza
            </button>
            {this.state.showGazaAutarchies && <h3>Autarquias de Gaza</h3>}
          </li>
          <li>
            <button
              className="button-zona"
              onClick={() => this.hideComponent("Inhambane")}
            >
              Mostrar Autarquias de Inhambane
            </button>
            {this.state.showInhambaneAutarchies && (
              <h3>Autarquias de Inhambane</h3>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default SouthZone;
