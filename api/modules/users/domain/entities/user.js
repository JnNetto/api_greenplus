let buildMakeUser = function (userValidator) {
  return ({
    id,
    token,
    username,
    password
  } = {}) => {
    let { error } = userValidator({
      id,
      token,
      username,
      password
    })
    if (error) throw new Error(error)
    
    return {
      getId: () => id,
      getToken: () => token,
      getUserName: () => username,
      getPassword: () => password
    }
  }
}

module.exports = buildMakeUser