//Faz a conexão com o BD
//(Deve ser importado para os aruivos que precisam se comunicar com o BD) 

const knex = require('knex');
const configuration = require('../../knexfile.js');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(configuration.development);

module.exports = connection;