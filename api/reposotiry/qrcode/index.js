let qrcode = require('../../sources/firebase/qrcode')

let listQrcode = () => {
  try{
    return Promise.resolve(qrcode.findAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let findIdQrcode = (id) => {
  try{
    return Promise.resolve(qrcode.findIdQrcode(id))
  }catch(err){
    return Promise.reject(err)
  }
}

let findQrcode = (qrCodeCurso, idPeriodo) => {
  try {
    return Promise.resolve(qrcode.findQrcode(qrCodeCurso, idPeriodo))
  } catch(err) {
    return Promise.reject(err)
  }
}

let register = async (qrCodePeriodo, novoQrCode) =>  {
  try{
    id = await qrcode.register(qrCodePeriodo, novoQrCode)
    return id
  }catch(err){
    return Promise.reject(err)
  }
}

let deleteQrCode = (idCurso, idPeriodo, idQrCode) => {
  try{
    return Promise.resolve(qrcode.deleteQrCode(idCurso, idPeriodo, idQrCode))
  }catch(err){
    return Promise.reject(err)
  }
}

// let findUser = (prop, val) => {
//   try{
//     return Promise.resolve(qrcode.find(prop, val))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let findPeriodoPorCurso = (idCurso) => {
//   try{
//     return Promise.resolve(qrcode.findPeriodoPorCurso(idCurso))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let findPeriodo = (periodos, idPeriodo) => {
//   try {
//     return Promise.resolve(qrcode.findPeriodo(periodos, idPeriodo))
//   } catch(err) {
//     return Promise.reject(err)
//   }
// }

// let dropAll = () => {
//   try{
//     return Promise.resolve(qrcode.dropAll())
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let update = (id, userInfo) => {
//   try{
//     return Promise.resolve(qrcode.update(id, userInfo))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

// let updateUserValue = (id, key, value) => {
//   try{
//     return Promise.resolve(qrcode.updateUserValue(id, key, value))
//   }catch(err){
//     return Promise.reject(err)
//   }
// }

module.exports = {
  listQrcode,
  findIdQrcode,
  findQrcode,
  register,
  deleteQrCode,
  // findUser,
  // findPeriodoPorCurso,
  // findPeriodo,
  // dropAll, 
  // update,
  // updateUserValue
}