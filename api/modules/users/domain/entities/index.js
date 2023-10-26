let buildMakeUser = require ('./user')
let userSchema = require ('./user-schema')
let userValidator = require('../../../../core/validator/')(userSchema)

let makeUser = buildMakeUser(userValidator)

module.exports = makeUser