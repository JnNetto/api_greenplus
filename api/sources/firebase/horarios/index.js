let db = require("../../../core/infra/db/firebase/firebase_config");
let horariosRef = db.ref("horarios");

let findHorariosPorCurso = async (id) => {
  const snapshot = await horariosRef.child(id).once("value");
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
let updatHorarios = async (idCurso, novoHorario) => {
  novoHorario.id = horariosRef.push().key;
  return await horariosRef
    .child(idCurso)
    .update(novoHorario)
    .then((snapshot) => {
      return novoHorario;
    });
};

module.exports = {
  findHorariosPorCurso,
  updatHorarios,
};
