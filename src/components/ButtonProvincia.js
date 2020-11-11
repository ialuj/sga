import React, { Component } from 'react'

import MAPUTO_CIDADE_AUTARCHIES from "./pages/autarchies/MaputoCidadeAutarchies";
import MAPUTO_PROVINCIA_AUTARCHIES from "./pages/autarchies/MaputoProvinciaAutarchies";
import GAZA_AUTARCHIES from "./pages/autarchies/GazaAutarchies";


import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";

class ButtonProvincia extends Component {

  constructor() {
    super();
    this.state = {
      provincia: "",
      showAutarchies: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent = (event) => {
    this.setState({provincia: event.target.value,
    showAutarchies: !this.state.showAutarchies});
  }

  AUTARCHIES = () => {
    switch(this.state.provincia){
      case "Autarquias de Maputo Cidade":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Maputo Provincia":
        return this.state.showAutarchies && <MAPUTO_PROVINCIA_AUTARCHIES />;
      case "Autarquias de Gaza":
        return this.state.showAutarchies && <GAZA_AUTARCHIES />;
      case "Autarquias de Inhambane":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Sofala":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Manica":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Zambezia":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Tete":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Nampula":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Cabo Delgado":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Autarquias de Niassa":
        return this.state.showAutarchies && <MAPUTO_CIDADE_AUTARCHIES />;
      default:
        return <div></div>;
    }
  }

    render() {
        return (
          <div>
            <button
              className="button-zona"
              value={this.props.province}
              onClick={this.hideComponent}
            >
              {this.props.province}
            </button>
            <this.AUTARCHIES />
          </div>);
    }

}

export default ButtonProvincia;