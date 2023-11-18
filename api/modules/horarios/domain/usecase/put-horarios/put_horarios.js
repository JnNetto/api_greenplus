let horariosDb = require("../../../../../reposotiry/horarios");

//retorna o id do evento registrado
let substituirHorario = async (idCurso, novoHorario) => {
  try {
    const novoHorarios = await horariosDb.updatHorarios(idCurso, novoHorario);
    return novoHorarios;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  substituirHorario,
};
