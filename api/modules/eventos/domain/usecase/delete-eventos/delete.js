const eventosDb = require('../../../../../reposotiry/eventos');
const cursosDb = require('../../../../../reposotiry/cursos')

//retorna o id do evento registrado
let deleteEvento = async (idCurso, idEvento) => {
    try {
        const id = await eventosDb.deleteEvento(idCurso, idEvento)

        return id
    } catch (err) {
        throw err
    }
}

module.exports = {
    deleteEvento
}