# Desafio desenvolvimento Odapp

>Criar um sistema em que auxilie as pessoas a localizarem dados de pacientes já atendido em suas tarefas diárias, no qual disponibilize:

- Nome do Paciente;
- Idade;
- Cidade;
- Estado;

## Requisitos

Back-end em NodeJS;
CRUD;
Front-end em React;

## Tecnologias

> Para o desenvolvimento do projeto, foram utilizadas as tecnologias:

- NodeJS
- ReactJS
- Docker
- MongoDB
- Insomnia

## Diferenciais

- Insomnia
- MongoDB

## Descrição do Desafio

> Descrição para ser realizado o desafio

- Elaborar um back-end em NodeJS com o seguinte serviço: Paciente (CRUD)
- Criar todos os métodos de cadastro (POST, PUT, DELETE E GET)
- Elaborar um template administrativo (Header, footer, side-menu, utilizando React)
- Listagem de Pacientes

## Rotas da Aplicação

> Rotas da API

GET: `/pacientes`

POST: `/pacientes`

PUT: `/pacientes/{id}`

DELETE:`/pacientes/{id}`

## Como executar a Aplicação

- Ter o docker instalado e rodar o comando `docker run --name mongodb -p 27017:27017 -d`

- Entrar na pasta `node-api` e executar o comando `npm install` e depois `npm run dev`

- No front-end, entrar na pastar `frontend-react` e executar o comando `yarn` e depois `yarn start`
