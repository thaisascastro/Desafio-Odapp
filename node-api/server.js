const express = require('express');
const mongoose = require('mongoose');


//inicia o app
const app = express();


//Inic o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//req=requisição ao servidor
//res=resposta para o usuário
//Rota
app.get('/', (req, res) => {
  res.send('Olá usuário');
});


app.listen(3001);
