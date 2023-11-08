//Use case get user
let horariosDb = require('../../../../../reposotiry/horarios')

let getHorariosCurso = async (idCurso) => {
    try {
        const horarios = await horariosDb.findHorariosPorCurso(idCurso)
        return horarios
    } catch (err) {
        throw err
    }
}

module.exports = {
    getHorariosCurso,
}