const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports={
    async index(request, response){
        const ongs = await connection('ongs').select("*");
    
        return response.json(ongs);
    },

    async create(request, response){
        //const data = request.body;
        //Desestruturação:
        const { name, email, whatsapp, city, uf} = request.body;

        //Gera 4 bytes de caracteres aleatorios e converte em uma string de tipo hexadecimal
        const id = generateUniqueId();

        //Função assincrona: Quando o node cheagr nesse código, ele vai aguardar
        //a realização do código abaixo para então continuar
        await connection('ongs').insert({
            id, 
            name,
            email, 
            whatsapp, 
            city, 
            uf,
        })

        return response.json({ id });
    }
};