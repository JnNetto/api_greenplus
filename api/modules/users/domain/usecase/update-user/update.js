//Use case login 
let usersDb = require('../../../../../reposotiry/users')
let authServices = require('../../../../../core/services/auth_services')

module.exports = usecaseUpdateUserValue = async ({email, key, value}) => {
    return usersDb.findUser('email', email).then( async user => {
        if(!user) throw new Error('UserNotFoundError')
        return usersDb.updateUserValue(user.id, key, value).then(result => {
            if(result.status === 'success') return true;
            else throw new Error('UpdateError')
        })
    }).catch(err => {
        throw err
    })
}