//Use case get user
let horariosDb = require('../../../../../reposotiry/horarios')

let getHorariosCurso = async (idcurso) => {
    try {
        const horarios = await horariosDb.findHorariosPorCurso(idcurso)
        return horarios
    } catch (err) {
        throw err
    }
}

module.exports = {
    getHorariosCurso,
}