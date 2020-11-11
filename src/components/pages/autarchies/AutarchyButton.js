import React, { Component } from 'react';
import Popup from 'reactjs-popup';

import AutarchyPopup from "./AutarchyPopup";

import 'reactjs-popup/dist/index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class AutarchyButton extends Component {

  state = {}

    render() {
        return (
          <div className="div-autarchy">
              <Popup
                     on='click'
                     trigger={<img src={this.props.image} alt="" className="img-autarchy-logo"/>} 
                     offset={[250, 250]}
                     contentStyle = { {width : '30rem', height : '30rem' }}>
               <AutarchyPopup imageUrl={this.props.image} autarquia={this.props.autarquia}/>
               </Popup>
          </div>);
    }

}

export default AutarchyButton;