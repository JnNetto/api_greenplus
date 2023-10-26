//Auth services for user authentication
let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')
const config = require('../../../config/config')

const authServices = {}

authServices.generateToken = (payload) => {
    return jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiresIn })
}

authServices.verifyToken = (token) => {
    return jwt.verify(token, config.jwt.secret)
}

authServices.hashPassword = (password) => {
    return bcrypt.hash(password, config.saltRounds)
}

authServices.comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash)
}

authServices.decodeToken = (token) => {
    return jwt.decode(token.split(" ")[1])
}

module.exports = authServices