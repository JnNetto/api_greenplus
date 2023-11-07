let periodosDb = require('../../sources/memory/periodos')

let listPeriodos = () => {
  try{
    return Promise.resolve(periodosDb.findAll())
  }catch(err){
    return Promise.reject(err)
  }
}


let findPeriodosDoCurso = (idCurso) => {
  try{
    return Promise.resolve(periodosDb.findPeriodosDoCurso(idCurso))
  }catch(err){
    return Promise.reject(err)
  }
}

let findPeriodo = (periodos, idPeriodo) => {
  try {
    return Promise.resolve(periodosDb.findPeriodo(periodos, idPeriodo))
  } catch(err) {
    return Promise.reject(err)
  }
}

// let findUser = (prop, val) => {
//   try{
//     return Promise.resolve(periodosDb.find(prop, val))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let register = async (userInfo) =>  {
//   try{
//     userInfo = await periodosDb.register(userInfo)
//     return userInfo
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let deleteUser = (id) => {
//   try{
//     return Promise.resolve(periodosDb.deleteUser(id))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let dropAll = () => {
//   try{
//     return Promise.resolve(periodosDb.dropAll())
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let update = (id, userInfo) => {
//   try{
//     return Promise.resolve(periodosDb.update(id, userInfo))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let updateUserValue = (id, key, value) => {
//   try{
//     return Promise.resolve(periodosDb.updateUserValue(id, key, value))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

module.exports = {
  listPeriodos,
  findPeriodosDoCurso,
  findPeriodo,
  // findUser,
  // register,
  // deleteUser,
  // dropAll, 
  // update,
  // updateUserValue
}