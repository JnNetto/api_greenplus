//Use case login 
let usersDb = require('../../../../../reposotiry/users')
let authServices = require('../../../../../core/services/auth_services')

module.exports = usecaseLogin = async ({username, password}) => {
    return usersDb.findUser('username', username).then( async user => {
        console.log(user)
        if (user && (await authServices.comparePassword(password, user.password))) {
            const token = authServices.generateToken({ user_id: user.id, username: user.username })
            user.token = token
            await usersDb.update(user.id, user)
            return token;
        }
        throw new Error('CreditalInvalidError')
    }).catch(err => {
        throw err
    })
}