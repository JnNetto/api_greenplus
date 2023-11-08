let horariosDb = require('../../sources/memory/horarios')

let findHorariosPorCurso = (idCurso) => {
  try{
    return Promise.resolve(horariosDb.findHorariosPorCurso(idCurso))
  }catch(err){
    return Promise.reject(err)
  }
}

let register = async (horariosCurso, novoHorario) =>  {
  try{
    var id = await horariosDb.put_horario(horariosCurso, novoHorario)
    return id
  }catch(err){
    return Promise.reject(err)
  }
}

let deleteEvento = (idCurso, idEvento) => {
  try{
    return Promise.resolve(horariosDb.deleteEvento(idCurso, idEvento))
  }catch(err){
    return Promise.reject(err)
  }
}

// let findUser = (prop, val) => {
//   try{
//     return Promise.resolve(eventosDb.find(prop, val))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let findPeriodo = (periodos, idPeriodo) => {
//   try {
//     return Promise.resolve(eventosDb.findPeriodo(periodos, idPeriodo))
//   } catch(err) {
//     return Promise.reject(err)
//   }
// }

// let dropAll = () => {
//   try{
//     return Promise.resolve(eventosDb.dropAll())
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let update = (id, userInfo) => {
//   try{
//     return Promise.resolve(eventosDb.update(id, userInfo))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let updateUserValue = (id, key, value) => {
//   try{
//     return Promise.resolve(eventosDb.updateUserValue(id, key, value))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

module.exports = {
  findHorariosPorCurso,
  register,
  deleteEvento,
  // findUser,
  // findPeriodo,
  // dropAll, 
  // update,
  // updateUserValue
}