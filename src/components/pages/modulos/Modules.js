import React, { Component } from 'react';
import { useState } from 'react';

import MODULE_BUTTON from "../../utils/CustomButtonModulo";

import DB from "../../fakedatabase/modules.json";

class Modules extends Component {
    
    state = {
        selectedModulo: this.props.selectedModulo,
    };

    MODULES = () => {
        switch(this.state.selectedModulo){
            case "Gestão Financeira Autárquica":
                return (
                    <div className="div-modules-list">
                        <ul className="horizontal-list">
                        <li>
                       <MODULE_BUTTON href="https://sga.rsig.gov.mz/meoa" modulo = "MEO-A" alt="Módulo de Planificação Orçamental Autárquica"/>
                       </li>
                       <li>
                       <MODULE_BUTTON href="https://sga.rsig.gov.mz/" modulo = "MEX-A" alt="Módulo de Execução Orçamental Autárquica"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "MPE-A" alt="Módulo de Património Autárquica"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "CEF" alt="Cadastro Único de Empreiteiros e Fornecedores do Estado"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "CBS" alt="Catálogo de Bens e Serviços"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "SNGRHE" alt="Sistema Nacional de Gestão de Recursos Humanos do Estado"/>
                       </li>
                       <li> 
                       <MODULE_BUTTON modulo = "PRF" alt="Preços de Referência"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "MPO-A" alt="Módulo de Planificação e Orçamentação Autárquica"/> 
                       </li>
                       </ul>
                    </div>
                );
            case "Gestão de Receitas Autárquicas":
                return (
                    <div className="div-modules-list">
                       <ul className="horizontal-list">
                            <li>
                       <MODULE_BUTTON modulo = "MRA" alt="Módulo de Gestão de Receitas Autárquicas"/> 
                          </li>
                        </ul>
                    </div>
                );
            case "Gestão de Serviços Autárquicos":
                return (
                    <div className="div-modules-list">
                        <ul className="horizontal-list">
                            <li>
                       <MODULE_BUTTON modulo = "MLR" alt="Módulo de Licenciamento e Registos Autárquica"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "MPOE" alt="Módulo de Planificação e Ocupação de Espaços Públicos"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "MMF" alt="Módulo de Gestão de Mercados e Feiras e Comércio Ambulante"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "MCM" alt="Módulo de Controlo Metrológico"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "MRC" alt="Módulo de Rendas Comerciais"/> 
                       </li>
                       <li>
                       <MODULE_BUTTON modulo = "MVC" alt="Módulo Veículos e Condução"/>
                       </li>
                       <li> 
                       <MODULE_BUTTON modulo = "MGE" alt="Módulo de Gestão de Estacionamentos"/> 
                       </li>
                       </ul>
                    </div>
                );
            case "Gestão de Informação Geográfica":
                return (
                    <div className="div-modules-list">
                       <ul className="horizontal-list">
                            <li>
                       <MODULE_BUTTON modulo = "MGIS" alt="Módulo de Gestão de Informação Geográfica"/> 
                          </li>
                        </ul>
                    </div>
                );
            case "Ordenamento e Gestão Urbanística":
                    return (
                        <div className="div-modules-list">
                           <ul className="horizontal-list">
                                <li>
                           <MODULE_BUTTON modulo = "MIT" alt="Módulo de Informação Territorial"/> 
                              </li>
                              <li>
                           <MODULE_BUTTON modulo = "MGS" alt="Módulo de Gestão de Solo Urbano"/> 
                              </li>
                              <li>
                           <MODULE_BUTTON modulo = "MGU" alt="Módulo de Gestão Urbanística"/> 
                              </li>
                            </ul>
                        </div>
                    );
            case "Gestão da Organização e Conhecimento":
                        return (
                            <div className="div-modules-list">
                               <ul className="horizontal-list">
                                    <li>
                               <MODULE_BUTTON modulo = "MGC" alt="Módulo de Gestão de Conhecimento"/> 
                                  </li>
                                </ul>
                            </div>
                        );
            case "Gestão de Serviços Urbanos e Ambiente":
                            return (
                                <div className="div-modules-list">
                                   <ul className="horizontal-list">
                                        <li>
                                   <MODULE_BUTTON modulo = "MRSU" alt="Módulo de Gestão de Resíduos e Limpeza Urbana"/> 
                                      </li>
                                      <li>
                                   <MODULE_BUTTON modulo = "MCE" alt="Módulo de Gestão de Cemitérios"/> 
                                      </li>
                                    </ul>
                                </div>
                            );
            case "Gestão da Polícia e Fiscalização Autárquica":
                                return (
                                    <div className="div-modules-list">
                                       <ul className="horizontal-list">
                                            <li>
                                       <MODULE_BUTTON modulo = "MPFA" alt="Módulo de Gestão de Polícia e Fiscalização Autárquica"/> 
                                          </li>
                                        </ul>
                                    </div>
                                );
            case "Apoio a Governação":
                            return (
                                <div className="div-modules-list">
                                   <ul className="horizontal-list">
                                        <li>
                                   <MODULE_BUTTON modulo = "MAG" alt="Módulo de Apoio à Governação"/> 
                                      </li>
                                    </ul>
                                </div>
                            );
            case "Gestão Relacional":
                            return (
                                <div className="div-modules-list">
                                   <ul className="horizontal-list">
                                        <li>
                                   <MODULE_BUTTON modulo = "MRUE" alt="Módulo de Repositório único de Entidades"/> 
                                      </li>
                                      <li>
                                   <MODULE_BUTTON modulo = "MBAM" alt="Módulo de Balcão de Atendimento Multinacional"/> 
                                      </li>
                                    </ul>
                                </div>
                            );       
                default: return <div></div>;
        }
    }

    render() {
      return (
          <div className="div-modules-list">
              <this.MODULES />
          </div>
      );
    }
}

export default Modules;
