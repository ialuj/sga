import React, { Component } from 'react';


import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";

class ModuloDiv extends Component {

  constructor() {
    super();
    this.state = {
      moduleDescription: "",
      showModules: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent = (event) => {
    this.setState({moduleDescription: event.target.value,
      showModules: !this.state.showModules});
  }

  AUTARCHIES = () => {
    switch(this.state.moduleDescription){
      case "Gestão Financeira Autárquica":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Gestão de Receitas Autárquicas":
        return this.state.showModules && <MAPUTO_PROVINCIA_AUTARCHIES />;
      case "Gestão de Serviços Autárquicos":
        return this.state.showModules && <GAZA_AUTARCHIES />;
      case "Gestão de Informação Geográfica":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Ordenamento e Gestão Urbanística":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Gestão da Organização e Conhecimento":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Gestão de Serviços Urbanos e Ambiente":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Gestão da Polícia e Fiscalização Autárquica":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Apoio à Governação":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
      case "Gestão Relacional":
        return this.state.showModules && <MAPUTO_CIDADE_AUTARCHIES />;
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

export default ModuloDiv;