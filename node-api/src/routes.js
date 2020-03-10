const express = require('express');
const routes = express.Router();

const PacienteController = require('./Controllers/PacienteController');

//Rota
routes.get('/pacientes', PacienteController.index);

module.exports = routes;
