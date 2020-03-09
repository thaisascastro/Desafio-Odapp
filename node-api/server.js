const express = require('express');

const app = express();

//req=requisição ao servidor
//res=resposta para o usuário
app.get('/', (req, res) => {
  res.send('Olá usuário');
});


app.listen(3001);
