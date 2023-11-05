const eventosDb = require('../../../../../reposotiry/eventos');
const cursosDb = require('../../../../../reposotiry/cursos')

//retorna o id do evento registrado
let deleteEvento = async (idCurso, idEvento) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        const eventosCurso = await eventosDb.findEventosPorCurso(curso)
        const id = await eventosDb.deleteEvento(eventosCurso, idEvento)

        return id
    } catch (err) {
        throw err
    }
}

module.exports = {
    deleteEvento
}