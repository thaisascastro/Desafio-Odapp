import React, { Component } from 'react'

import api from '../../services/api'

import './style.css'

export default class Form extends Component {
  state = {
    nome: "",
    idade: 0,
    cidade: "",
    estado: ""
  }

  async handleOnSubmit(event) {
    event.preventDefault();

    const { nome, cidade, estado, idade } = this.state;

    const dataAtualFormatada = new Date(Date.now()).toISOString();

    const data = {
      nome,
      cidade,
      estado,
      idade,
      dataCadastro: dataAtualFormatada
    };

    await api.post('/pacientes', data).then(() => alert('Registro incluido com sucesso!'));
  }

  handleChangeNome = e => {
    const nome = e.target.value;
    this.setState({ nome })
  }

  handleChangeIdade = e => {
    const idade = e.target.value;
    this.setState({ idade })
  }

  handleChangeCidade = e => {
    const cidade = e.target.value;
    this.setState({ cidade })
  }

  handleChangeEstado = e => {
    const estado = e.target.value;
    this.setState({ estado })
  }

  render() {
    return (
      <form action="" className="paciente-info">
        <div className="group">
          <label>Nome </label>
          <input type="text" nome="nome" onChange={this.handleChangeNome} />
        </div>
        <div className="group">
          <label>Idade </label>
          <input type="number" idade="idade" onChange={this.handleChangeIdade} />
        </div>
        <div className="group">
          <label>Cidade </label>
          <input type="text" cidade="cidade" onChange={this.handleChangeCidade} />
        </div>
        <div className="group">
          <label>Estado </label>
          <input type="text" estado="estado" onChange={this.handleChangeEstado} />
        </div>
        <div className="group-button">
          <button type="submit" className="link" onClick={e => this.handleOnSubmit(e)}>Confirmar</button>
          <button type="button" className="link">Cancelar</button>
        </div>
      </form>
    )
  }
}
