const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        //Verificar se a ong existe,para validar o login dela
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('*')
        .first();

        if(!ong)
        {
            return response.status(400).json({ error: 'No ONG found with this ID' });
        }

        return response.json(ong);
    }
}