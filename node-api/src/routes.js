const express = require('express');
const routes = express.Router();

//Rota
routes.get('/', (req, res) => {
  return res.send('Olá usuário');
});

module.exports = routes;
