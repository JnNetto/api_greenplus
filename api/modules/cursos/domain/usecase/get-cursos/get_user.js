//Use case get user
 let usersDb = require('../../../../../reposotiry/users')
//let portersDb = require('../../../../../reposotiry/porters')

module.exports = getUserByUserName = async (key, value) => {
    return usersDb.findUser(key, value).then(async user => {
        return user
    }).catch(err => {
        throw err
    })
}