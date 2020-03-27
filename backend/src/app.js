//Importa as funcionalidades do express
const express = require('express');

//Importa as rotas
const routes = require('./routes');

//Importa os cors, utilizado para determinar quem poderá acessar a aplicação
const cors = require('cors');

const { errors } = require('celebrate');

//Variavel utilizada para armazenar a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
    Rota / Recurso

    Métodos HTTP
        GET: Buscar uma informação no back-end
        POST: Criar uma informação no back-end
        PUT: Alterar uma informação no back-end
        DELETE: Deletar uma informação no back-end

    Tipos de parâmetros:
        Query Params: Parâmetros nomeados enviados  na rota aops "?" (Filtros, paginação)
        Route Params: Parâmetros utilizados para identificar rescursos
        Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
//'/' -> Rota raiz do node

module.exports = app;