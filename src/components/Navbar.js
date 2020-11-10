import React, { Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import Logo from "./Logo";
import Sistafe from "./Sistafe";
import SistafeAutarquico from "./SistafeAutarquico";
import Home from "./CustonHomeMenu";
import Item from "./CustomMenuItem";

import "./css/Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <AppBar>
          <Toolbar className="toolbar">
            <Home />
            <div className="div-space" />
            <Logo />
            <div className="div-space-main" />
            <Item description="AUTARQUIAS" url="/autarquias" />
            <div className="div-space-menu-item" />
            <Item description="MAEFP" url="/maefp" />
            <div className="div-space-menu-item" />
            <Item description="MEF" url="/mef" />
            <div className="div-space-menu-item" />
            <Item description="PRODUÇÃO" url="/producao" />
            <div className="div-space-menu-item" />
            <Item description="TREINAMENTO" url="/treinamento" />
            <div className="div-space-menu-item" />
            <Item description="CONTACTOS" url="/contactos" />
            <div className="div-space" />
            <Sistafe description="e-SISTAFE" className="sistafe-logo" />
            <div className="div-space" />
            <SistafeAutarquico
              description="e-SISTAFE AUTÁRQUICO"
              className="sistafe-logo"
            />
            <div className="div-space" />
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Navbar;
