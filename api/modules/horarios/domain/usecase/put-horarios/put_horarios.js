let horariosDb = require('../../../../../reposotiry/horarios');


//retorna o id do evento registrado
let substituirHorario = async (idCurso, novoHorario) => {
    try {
        const horariosCurso = await horariosDb.findHorariosPorCurso(idCurso)
        const id = await horariosDb.register(horariosCurso, novoHorario);
        return id
    } catch (err) {
        throw err;
    }
}

module.exports = {
    substituirHorario
}