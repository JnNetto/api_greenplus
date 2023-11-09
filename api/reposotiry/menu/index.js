let Menu = require('../../sources/firebase/menu')

let listMenu = () => {
  try{
    return Promise.resolve(Menu.findAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let findIdMenu = (id) => {
  try{
    return Promise.resolve(Menu.findIdMenu(id))
  }catch(err){
    return Promise.reject(err)
  }
}

let findUser = (prop, val) => {
  try{
    return Promise.resolve(Menu.find(prop, val))
  }catch(err){
    return Promise.reject(err)
  }
}

let findPeriodoPorCurso = (idCurso) => {
  try{
    return Promise.resolve(Menu.findPeriodoPorCurso(idCurso))
  }catch(err){
    return Promise.reject(err)
  }
}

let findPeriodo = (periodos, idPeriodo) => {
  try {
    return Promise.resolve(Menu.findPeriodo(periodos, idPeriodo))
  } catch(err) {
    return Promise.reject(err)
  }
}

let register = async (menu) =>  {
  try{
    var id = await Menu.register(menu)
    return id
  }catch(err){
    return Promise.reject(err)
  }
}

let deleteUser = (id) => {
  try{
    return Promise.resolve(Menu.deleteUser(id))
  }catch(err){
    return Promise.reject(err)
  }
}

let dropAll = () => {
  try{
    return Promise.resolve(Menu.dropAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let update = (id, userInfo) => {
  try{
    return Promise.resolve(Menu.update(id, userInfo))
  }catch(err){
    return Promise.reject(err)
  }
}

let updateUserValue = (id, key, value) => {
  try{
    return Promise.resolve(Menu.updateUserValue(id, key, value))
  }catch(err){
    return Promise.reject(err)
  }
}

module.exports = {
  listMenu,
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