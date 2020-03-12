import React, { Component } from "react";
import api from '../../services/api';
import './style.css'
export default class Paciente extends Component {
  state = {
    paciente: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/paciente/${id}`);

    this.setState({ paciente: response.data });

  }
  render() {
    const { paciente } = this.state;

    return (
      <div className="paciente-info">
        <h1>{paciente.title}</h1>
        <p>{paciente.description}</p>

        <p>
          URL:<a href={paciente.url}>{paciente.url}</a>
        </p>
      </div>
    );
  }
}
