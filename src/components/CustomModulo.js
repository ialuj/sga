import React, { Component } from 'react';

import Button from "./CustomButtonModulo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";

function MODULOS({moduloDesc}) {
    switch(moduloDesc){
    case "Gestão Financeira Autárquica":
        return (<div>
       <ul className="list horizontal-list">
              <li>
              <a href="#"><Button modulo="MEO-A" /></a>
              </li>
          <li>
          <a href="#"><Button modulo="MEX-A" /></a>
          </li>
          <li>
          <a href="#"><Button modulo="MPE-A" /></a>
          </li>
          <li>
          <a href="#"><Button modulo="CEF" /></a>
          </li>
          <li>
          <a href="#"><Button modulo="CBS" /></a>
          </li>
          <li>
          <a href="#"><Button modulo="SNGRHE" /></a>
          </li>
          <li>
          <a href="#"><Button modulo="PRF" /></a>
          </li>
          <li>
          <a href="#"><Button modulo="MPO-A" /></a>
          </li>
        </ul>
               </div>);
        break;
        case "Gestão de Receitas Autárquicas":
        return (<div>
                 <ul className="list horizontal-list">
              <li>
              <a href="#"><Button modulo="MRA" /></a>
              </li>
                  </ul>
            </div>);
        break;
        case "Gestão de Serviços Autárquicos":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MLR" /></a>
                       </li>
                   <li>
                   <a href="#"><Button modulo="MPOE" /></a>
                   </li>
                   <li>
                   <a href="#"><Button modulo="MMF" /></a>
                   </li>
                   <li>
                   <a href="#"><Button modulo="MCM" /></a>
                   </li>
                   <li>
                   <a href="#"><Button modulo="MRC" /></a>
                   </li>
                   <li>
                   <a href="#"><Button modulo="MVC" /></a>
                   </li>
                   <li>
                   <a href="#"><Button modulo="MGE" /></a>
                   </li>
                 </ul>
                        </div>);
            break;
            case "Gestão de Informação Geográfica":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MGIS" /></a>
                       </li>
                 </ul>
                        </div>);
            break;
            case "Ordenamento e Gestão Urbanística":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MIT" /></a>
                       </li>
                       <li>
                       <a href="#"><Button modulo="MGS" /></a>
                       </li>
                       <li>
                       <a href="#"><Button modulo="MGU" /></a>
                       </li>
                 </ul>
                        </div>);
            break;
            case "Gestão da Organização e Conhecimento":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MGC" /></a>
                       </li>
                 </ul>
                        </div>);
            break;
            case "Gestão de Serviços Urbanos e Ambiente":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MSAS" /></a>
                       </li>
                       <li>
                       <a href="#"><Button modulo="MRSU" /></a>
                       </li>
                       <li>
                       <a href="#"><Button modulo="MCE" /></a>
                       </li>
                 </ul>
                        </div>);
            break;
            case "Gestão da Polícia e Fiscalização Autárquica":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MPFA" /></a>
                       </li>
                 </ul>
                        </div>);
            break;
            case "Apoio à Governação":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MAG" /></a>
                       </li>
                 </ul>
                        </div>);
            break;
            case "Gestão Relacional":
            return (<div>
                <ul className="list horizontal-list">
                       <li>
                       <a href="#"><Button modulo="MRUE" /></a>
                       </li>
                       <li>
                       <a href="#"><Button modulo="MBAM" /></a>
                       </li>
                 </ul>
                        </div>);
            break;
        default: return <div></div>;
    }
}

const MOD = (props) => {
    if(this.props.moduloDesc==="GFA"){
        return (<div>
            <ul className="list horizontal-list">
                           <li>
                           <a href="#"><Button modulo="MAG" /></a>
                           </li>
                     </ul>
        </div>);
    }
        }

class CustomModulo extends Component {
    constructor(props){
        super(props);
        this.handleEvent = this.handleEvent.bind(this);  
    }
    state = {
        moduloDescription:this.props.sga_modulo_description,
        enviroment :this.props.environment,
        url :this.props.urlPrefix,
        moduloDesc:"",
        count:this.props.count
    };

    handleEvent(){  
        console.log(this.props);  
      } 

    componentDidUpdate = () => {
        console.log("Clicked: "+this.props.selectedModulo);
    }
    

    render() {
      return (
          <div onClick={this.handleEvent}>
              <MODULOS moduloDesc =  {this.props.sga_modulo_description} />
          </div>
      );
    }
}

export default CustomModulo;