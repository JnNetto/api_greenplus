let qrcode = require('../../sources/memory/qrcode')

let listQrcode = () => {
  try{
    return Promise.resolve(qrcode.findAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let findIdMenu = (id) => {
  try{
    return Promise.resolve(qrcode.findIdMenu(id))
  }catch(err){
    return Promise.reject(err)
  }
}

let findUser = (prop, val) => {
  try{
    return Promise.resolve(qrcode.find(prop, val))
  }catch(err){
    return Promise.reject(err)
  }
}

let findPeriodoPorCurso = (idCurso) => {
  try{
    return Promise.resolve(qrcode.findPeriodoPorCurso(idCurso))
  }catch(err){
    return Promise.reject(err)
  }
}

let findPeriodo = (periodos, idPeriodo) => {
  try {
    return Promise.resolve(qrcode.findPeriodo(periodos, idPeriodo))
  } catch(err) {
    return Promise.reject(err)
  }
}

let register = async (menu) =>  {
  try{
    menu = await qrcode.register(menu)
    return menu
  }catch(err){
    return Promise.reject(err)
  }
}

let deleteUser = (id) => {
  try{
    return Promise.resolve(qrcode.deleteUser(id))
  }catch(err){
    return Promise.reject(err)
  }
}

let dropAll = () => {
  try{
    return Promise.resolve(qrcode.dropAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let update = (id, userInfo) => {
  try{
    return Promise.resolve(qrcode.update(id, userInfo))
  }catch(err){
    return Promise.reject(err)
  }
}

let updateUserValue = (id, key, value) => {
  try{
    return Promise.resolve(qrcode.updateUserValue(id, key, value))
  }catch(err){
    return Promise.reject(err)
  }
}

module.exports = {
  listQrcode,
  findUser,
  findIdMenu,
  findPeriodoPorCurso,
  findPeriodo,
  register,
  deleteUser,
  dropAll, 
  update,
  updateUserValue
}