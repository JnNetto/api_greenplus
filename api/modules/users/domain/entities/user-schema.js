let Joi = require('joi')

module.exports = Joi.object().keys({
    id: Joi.string().optional().empty(''),
    token: Joi.string().empty(''),
    username: Joi.string().required().error(new Error('Username is required')),
    password: Joi.any().allow('')
})