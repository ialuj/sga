import React, { Component } from 'react';

import articles from "../../fakedatabase/articles.json";

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
             {articles.map((article, i) => {
                if(article.title===this.props.autarquia)
                {
                return <p key={i}>
                  {article.description}  
                </p>
                }
            })
             }
             </li>
             </ul>
            </div>
           );
    }
}

export default AutarchyPopup;