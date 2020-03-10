const mongoose = require('mongoose');

const Paciente = mongoose.model('Paciente');

module.exports = {
  async index(req, res) {
    const pacientes = await Paciente.find();

    return res.json(pacientes);

  },
  async store(req, res) {
    const paciente = await Paciente.create(req.body);

    return res.json(paciente);

  },
};
