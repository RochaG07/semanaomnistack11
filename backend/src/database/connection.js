//Faz a conexão com o BD
//(Deve ser importado para os aruivos que precisam se comunicar com o BD) 

const knex = require('knex');
const configuration = require('../../knexfile.js');

const connection = knex(configuration.development);

module.exports = connection;