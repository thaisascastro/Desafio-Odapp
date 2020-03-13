import React, { Component } from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component {
  state = {
    pacientes: [],
    pacienteInfo: {},
    page: 1,
  }

  componentDidMount() {
    this.loadPacientes();
  }

  loadPacientes = async (page = 1) => {
    const response = await api.get(`/pacientes?page=${page}`);
    const { docs, ...pacienteInfo } = response.data;
    this.setState({ pacientes: docs, pacienteInfo, page });
  }

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadPacientes(pageNumber);
  }

  nextPage = () => {
    const { page, pacienteInfo } = this.state;

    if (page === pacienteInfo.pages) return;
    const pageNumber = page + 1;
    this.loadPacientes(pageNumber);
  }

  render() {
    const { pacientes, page, pacienteInfo } = this.state;

    return (
      <div className="paciente-list">
        {pacientes.map(paciente => (
          <article key={paciente._id}>
            <div className="dados-paciente"><strong>Nome: </strong><p>{paciente.nome}</p></div>
            <div className="dados-paciente"><strong>Idade: </strong><p>{paciente.idade} </p></div>
            <div className="dados-paciente"><strong>Cidade: </strong><p>{paciente.cidade}</p></div>
            <div className="dados-paciente"><strong>Estado:</strong><p>{paciente.estado}</p></div>
            <Link to={`/paciente/${paciente._id}`}>Acessar</Link>
            <Link to={`/paciente/${paciente._id}`}>Editar</Link>
            <Link to={`/paciente/${paciente._id}`}>Excluir</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === pacienteInfo.pages} onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    );
  }
}

