import React, { Component } from 'react';
import api from '../services/api';

import Emoji from './Emoji';
import TextContent from './TextContent';

import './style.css';
import virusSvg from '../assets/virus.svg';


export default class Main extends Component {
  state = {
    casosEstados: [],
    casosBrasil: {},
    isLoading: false,
  };

  selecionarEstado = event => {
    this.setState({ item: event.target.value })
  }

  async componentDidMount() {
    const response = await api.get("/report/v1");
    const responseBrasil = await api.get("/report/v1/brazil");

    this.setState({ 
      casosEstados: response.data.data,
      casosBrasil: responseBrasil.data.data, 
      isLoading: true 
    });

  };

  render() {

    const { casosEstados, casosBrasil, isLoading } = this.state;

    return (
      <>
        <img src={virusSvg} alt="Ícone vírus" className="logo" />
        <h1>COVID-19 BRASIL</h1>

        <div className="data-brazil">
          <ul>
              <li>
                <span>
                { isLoading === true ? parseInt(casosBrasil.confirmed).toLocaleString() : '' }
                </span>
                <p>Confirmados</p> 
              </li>
              <li>
                <span>
                { isLoading === true ? parseInt(casosBrasil.cases).toLocaleString() : '' }
                </span>
                <p>Ativos</p>
              </li>
              <li>
                <span>
                { isLoading === true ? parseInt(casosBrasil.recovered).toLocaleString() : '' }
                </span>
                <p>Recuperados</p>
              </li>
              <li>
                <span>
                { isLoading === true ? parseInt(casosBrasil.deaths).toLocaleString() : '' }
                </span>
                <p>Óbitos</p>
              </li>
          </ul>
        </div>
        <p className="subtitle">Número de casos por estado:</p>
        <select value={this.state.item} onChange={this.selecionarEstado}>
          <option value="">Selecione o estado</option>
          {casosEstados.map(caso => (
            <option key={caso.uid} value={caso.uf}>
              {caso.state}
            </option>
          ))}
        </select>
         
        {casosEstados.filter(caso => caso.uf === this.state.item ).map(caso => (
          <ul key={caso.uid} className="data-state">
            <li>
              <span className="number">{caso.cases.toLocaleString()}</span>
              <span className="title"><Emoji symbol="😷" /> Casos confirmados</span>
            </li>
            <li>
              <span className="number">{caso.deaths.toLocaleString()}</span>
              <span className="title"><Emoji symbol="💀" /> Óbitos confirmados</span>
            </li>
          </ul>
        ))}

        <TextContent />

      </>
    );
  }
}
