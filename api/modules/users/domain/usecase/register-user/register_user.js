//Use case register user
let usersRepo = require('../../../../../reposotiry/users')
let authServices = require('../../../../../core/services/auth_services')
const { any } = require('joi')

module.exports = usecaseRegisterUser = async (user) => {
    console.log(user)
    user.password = await authServices.hashPassword(user.password)
    return usersRepo.register(user).then(async user => {
        var token = authServices.generateToken({ user_id: user.id, username: user.username })

        return { token: token}
    }).catch(err => {
        throw new Error("Erro ao cadastrar usuario")
    })


}