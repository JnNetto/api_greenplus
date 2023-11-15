let db = require('../../../core/infra/db/firebase/firebase_config');
let horariosRef = db.ref('horarios')

let findHorariosPorCurso = async (id) => {
    const snapshot = await horariosRef.child(id).once('value');
    const horario = snapshot.val();
    return horario;
}

let updateHorarios = async (idCurso, novoHorario) => {
    return await horariosRef.child(idCurso).update(novoHorario).then(snapshot => {
        return novoHorario
    })
}

module.exports = {
    findHorariosPorCurso,
    updateHorarios
}
