const express = require('express');
const routes = express.Router();

const PacienteController = require('./Controllers/PacienteController');

//Rota
routes.get('/pacientes', PacienteController.index);
routes.get('/pacientes/:id', PacienteController.show);
routes.post('/pacientes', PacienteController.store);
routes.put('/pacientes/:id', PacienteController.update);
routes.delete('/pacientes/:id', PacienteController.destroy);
module.exports = routes;
