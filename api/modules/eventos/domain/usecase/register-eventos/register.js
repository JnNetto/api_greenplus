let eventosDb = require('../../../../../reposotiry/eventos');
let cursosDb = require('../../../../../reposotiry/cursos')

//retorna o id do evento registrado
let registerEvento = async (idCurso, novoEvento) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        const eventosCurso = await eventosDb.findEventosPorCurso(curso)
        const id = await eventosDb.register(eventosCurso, novoEvento);

        return id;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    registerEvento
}