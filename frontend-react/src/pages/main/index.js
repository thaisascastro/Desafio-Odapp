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

  componentDidMouth() {
    this.loadPacientes();
  }

  loadPacientes = async (page = 1) => {
    const response = await api.get(`/pacientes?page=${page}`);

    const { docs, ...pacienteInfo } = response.data;

    this.setState({ pacientes: docs, pacienteInfo, page });

    this.prevPage = () => {
      const { page, pacienteInfo } = this.state;

      if (page === 1) return;

      const pageNumber = page - 1;
    }

    this.nextPage = () => {
      const { page, pacienteInfo } = this.state;

      if (page === pacienteInfo.pages) return;
      const pageNumber = page + 1;
      this.loadPacientes(pageNumber);
    }
  }

  render() {
    const { pacientes, page, pacienteInfo } = this.state;

    return (
      <div className="paciente-list">
        {pacientes.map(paciente => (
          <article key={paciente._id}>
            <strong>{paciente.title}</strong>
            <p>{paciente.description} </p>
            <Link to={`/paciente/${paciente._id}`}>Acessar</Link>
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

