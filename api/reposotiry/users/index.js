let User = require('../../sources/memory/index')

let listUsers = () => {
  try{
    return Promise.resolve(User.findAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let findUser = (prop, val) => {
  try{
    return Promise.resolve(User.find(prop, val))
  }catch(err){
    return Promise.reject(err)
  }
}

let register = async (userInfo) =>  {
  try{
    userInfo = await User.register(userInfo)
    return userInfo
  }catch(err){
    return Promise.reject(err)
  }
}

let deleteUser = (id) => {
  try{
    return Promise.resolve(User.deleteUser(id))
  }catch(err){
    return Promise.reject(err)
  }
}

let dropAll = () => {
  try{
    return Promise.resolve(User.dropAll())
  }catch(err){
    return Promise.reject(err)
  }
}

let update = (id, userInfo) => {
  try{
    return Promise.resolve(User.update(id, userInfo))
  }catch(err){
    return Promise.reject(err)
  }
}

let updateUserValue = (id, key, value) => {
  try{
    return Promise.resolve(User.updateUserValue(id, key, value))
  }catch(err){
    return Promise.reject(err)
  }
}

module.exports = {
  listUsers,
  findUser,
  register,
  deleteUser,
  dropAll, 
  update,
  updateUserValue
}