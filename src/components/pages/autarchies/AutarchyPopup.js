import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";

class AutarchyPopup extends Component{

    state = {}

    render() {
        return (
            <div className="div-popup">
                <ul className="list">
                    <li><img src={this.props.imageUrl} alt="" className="img-autarchy-logo"/></li>
                    <li></li>
                    <li>
            <h3>{this.props.autarquia}</h3>
            </li>
            <li></li>
            <li></li>
            <li>
             <p>A {this.props.autarquia} iniciou o exercício do seu 5.º mandato na sequência das quintas eleições autárquicas realizadas em Outubro do ano de dois mil e dezoito.</p>
             </li>
             </ul>
            </div>
           );
    }
}

export default AutarchyPopup;