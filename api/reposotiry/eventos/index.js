let eventosDb = require('../../sources/memory/eventos')

let findEventosPorCurso = (idCurso) => {
  try{
    return Promise.resolve(eventosDb.findEventosPorCurso(idCurso))
  }catch(err){
    return Promise.reject(err)
  }
}

let register = async (eventosCurso, novoEvento) =>  {
  try{
    idEventoNovo = await eventosDb.register(eventosCurso, novoEvento)

    return idEventoNovo
  }catch(err){
    return Promise.reject(err)
  }
}

let deleteEvento = (eventosCurso, idEvento) => {
  try{
    return Promise.resolve(eventosDb.deleteEvento(eventosCurso, idEvento))
  }catch(err){
    return Promise.reject(err)
  }
}

let listEventos = () => {
  try{
    return Promise.resolve(eventosDb.findAll())
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
  listEventos,
  findEventosPorCurso,
  register,
  deleteEvento,
  // findUser,
  // findPeriodo,
  // dropAll, 
  // update,
  // updateUserValue
}