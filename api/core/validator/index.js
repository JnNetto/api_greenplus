let Joi = require('joi')

let validator = (schema) =>
  (payload) => {
    let {error} = schema.validate(payload)
    if (error) throw new Error(error.message)
    return true
  }

module.exports = validator