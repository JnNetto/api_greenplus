let db = require("../../../core/infra/db/firebase/firebase_config");
let horariosRef = db.ref("horarios");

let findHorariosPorCurso = async (id) => {
  const snapshot = await horariosRef.child(id + "/" + "value").once("value");
  const horario = snapshot.val();
  return horario;
};

// let updateHorarios = (idCurso, novoHorario) => {
//   return horariosRef
//     .child(idCurso)
//     .update(novoHorario)
//     .then((snapshot) => {
//       return novoHorario;
//     });
// };
// let updatHorarios = async (idCurso, novoHorario) => {
//   return await horariosRef
//     .child(idCurso)
//     .update(novoHorario.value)
//     .then((snapshot) => {
//       return novoHorario;
//     });
// };

let updatHorarios = async (idCurso, novoHorario) => {
  try {
    await horariosRef.child(idCurso).update({"value": novoHorario.value})
    novoHorario = novoHorario.value;
    return novoHorario
  } catch (error) {
    throw error
  }
}

module.exports = {
  findHorariosPorCurso,
  updatHorarios,
};
