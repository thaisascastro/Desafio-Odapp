import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => (
  <Fragment>
    <header id="main-header">
      <a href="/">
        ODAPP
      </a>
      <a href="/paciente"> + Adicionar Paciente</a>
    </header>
  </Fragment>
)

export default Header;
