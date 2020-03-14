import React, { Component, Fragment } from 'react'

import './style.css'

export default class Form extends Component {
  state = {}

  render() {
    return (
      <form action="" className="paciente-info">
        <div className="group">
          <label>Nome </label>
          <input type="text" />
        </div>
        <div className="group">
          <label>Idade </label>
          <input type="number" />
        </div>
        <div className="group">
          <label>Cidade </label>
          <input type="text" />
        </div>
        <div className="group">
          <label>Estado </label>
          <input type="text" />
        </div>
        <div className="group-button">
          <button type="submit" className="link">Confirmar</button>
          <button type="button" className="link">Cancelar</button>
        </div>
      </form>
    )
  }
}
