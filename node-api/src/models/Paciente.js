const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  dataCadastro: {
    type: Date,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  }
});

mongoose.model('Paciente', PacienteSchema);
