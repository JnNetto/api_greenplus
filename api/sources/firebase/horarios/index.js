let db = require('../../../core/infra/db/firebase/firebase_config');
let horariosRef = db.ref('horarios')

let findHorariosPorCurso = async (id) => {
    const snapshot = await horariosRef.child(id).once('value');
    const horario = snapshot.val();
    return horario;
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
    // put_horario
}
