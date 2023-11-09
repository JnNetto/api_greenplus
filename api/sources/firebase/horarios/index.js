let db = require('../../../core/infra/db/firebase/firebase_config');
//let cursosDb = require('../../memory/cursos/cursos')
let horariosRef = db.ref('horarios')

let findHorariosPorCurso = (id) => {
    const horarios = horariosRef[id]
    if (horarios) {
        return horarios
    } else {
        return null
    }
}

// let put_horario = (idCurso, novoHorario) => {
//     try {
//         horariosRef[idCurso] = novoHorario
//         return novoHorario  
//     } catch (error) {
//         return null;
//     }
// }


module.exports = {
    findHorariosPorCurso,
    put_horario
}
