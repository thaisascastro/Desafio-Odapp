const mongoose = require('mongoose');

const Paciente = mongoose.model('Paciente');

module.exports = {
  async index(req, res) {
    const pacientes = await Paciente.find();

    return res.json(pacientes);

  }
};
