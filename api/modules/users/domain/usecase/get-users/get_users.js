//Use case get users (list all users)
let usersDb = require('../../../../../reposotiry/users')

module.exports = usecaseGetUsers = async () => {
    return usersDb.listUsers().then(users => {
        return users
    }).catch(err => {
        throw err
    })
}