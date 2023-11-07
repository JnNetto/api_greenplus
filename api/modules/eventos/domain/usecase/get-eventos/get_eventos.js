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

let getEventosCurso = async (idCurso) => {
    try {
        const eventos = await eventosDb.findEventosPorCurso(idCurso)

        return eventos
    } catch (err) {
        throw err
    }
}


module.exports = {
    usecaseGetEventos,
    getEventosCurso,
}