let eventosDb = require('../../../../../reposotiry/eventos');
let cursosDb = require('../../../../../reposotiry/cursos')

//retorna o id do evento registrado
let registerEvento = async (idCurso, novoEvento) => {
    try {
        const eventosCurso = await eventosDb.findEventosPorCurso(idCurso)
        const id = await eventosDb.register(idCurso, novoEvento);

        return id;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    registerEvento
}