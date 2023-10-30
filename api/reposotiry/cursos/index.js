let Cursos = require('../../sources/memory/cursos')

let listCursos = () => {
  try{
    return Promise.resolve(Cursos.findAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let findUser = (prop, val) => {
  try{
    return Promise.resolve(Cursos.find(prop, val))
  }catch(err){
    return Promise.reject(err)
  }
}

let register = async (userInfo) =>  {
  try{
    userInfo = await Cursos.register(userInfo)
    return userInfo
  }catch(err){
    return Promise.reject(err)
  }
}

let deleteUser = (id) => {
  try{
    return Promise.resolve(Cursos.deleteUser(id))
  }catch(err){
    return Promise.reject(err)
  }
}

let dropAll = () => {
  try{
    return Promise.resolve(Cursos.dropAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let update = (id, userInfo) => {
  try{
    return Promise.resolve(Cursos.update(id, userInfo))
  }catch(err){
    return Promise.reject(err)
  }
}

let updateUserValue = (id, key, value) => {
  try{
    return Promise.resolve(Cursos.updateUserValue(id, key, value))
  }catch(err){
    return Promise.reject(err)
  }
}

module.exports = {
  listCursos,
  findUser,
  register,
  deleteUser,
  dropAll, 
  update,
  updateUserValue
}