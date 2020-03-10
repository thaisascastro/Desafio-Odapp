const mongoose = require('mongoose');

const Paciente = mongoose.model('Paciente');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const pacientes = await Paciente.paginate({}, { page, limit: 10 });

    return res.json(pacientes);

  },

  async show(req, res) {
    const paciente = await Paciente.findById(req.params.id);

    return res.json(paciente);
  },

  async store(req, res) {
    const paciente = await Paciente.create(req.body);

    return res.json(paciente);

  },

  async update(req, res) {
    const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(paciente);
  },
  async destroy(req, res) {
    await Paciente.findById(req.params.id);
    return res.send();
  }
};
