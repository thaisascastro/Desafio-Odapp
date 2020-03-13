import React, { Component } from "react";
import api from '../../services/api';
import './style.css';
import { Link } from 'react-router-dom';
export default class Paciente extends Component {
  state = {
    paciente: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/pacientes/${id}`);
    this.setState({ paciente: response.data });

  }
  render() {
    const { paciente } = this.state;

    return (
      <div className="paciente-info">
        <article key={paciente._id}>
          <div className="dados-paciente"><strong>Nome: </strong><p>{paciente.nome}</p></div>
          <div className="dados-paciente"><strong>Idade: </strong><p>{paciente.idade} </p></div>
          <div className="dados-paciente"><strong>Cidade: </strong><p>{paciente.cidade}</p></div>
          <div className="dados-paciente"><strong>Estado:</strong><p>{paciente.estado}</p></div>
          <Link to={`/`} className="link">Voltar</Link>
        </article>
      </div>
    );
  }
}

