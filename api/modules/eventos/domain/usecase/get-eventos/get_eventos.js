//Use case get user
let eventosDb = require('../../../../../reposotiry/eventos')
let cursosDb = require('../../../../../reposotiry/cursos')

let usecaseGetEventos = async () => {
    return eventosDb.listEventos().then(cursos => {
        
        return cursos
    }).catch(err => {
        throw err
    })
}

let usecaseGetEventosCurso = async (idCurso) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        const eventos = await eventosDb.findEventosPorCurso(curso)

        return eventos
    } catch (err) {
        throw err
    }
}


module.exports = {
    usecaseGetEventos,
    usecaseGetEventosCurso,
}