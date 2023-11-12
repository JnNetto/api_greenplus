let usercaseRegisterUser = require('../../domain/usecase/register-user/register_user')
let getUserByUserName = require('../../domain/usecase/get-users/get_user')
// let usecaseGetUsers = require('../../domain/usecase/get-users/get_users')
let usecaseUpdateUserValue = require('../../domain/usecase/update-user/update')
let usecaseLogin = require('../../domain/usecase/login/login')
let userSchema = require('../../domain/entities/user-schema')
let userValidator = require('../../../../core/validator/')
const authServices = require("../../../../core/services/auth_services")
const helper = require('../../../../core/helpers/response_body')
const controller = {}

controller.getAll = (req, res, next) => {
    usecaseGetUsers().then(users => {
        res.send(helper.responseBodySuccess({data:users}))
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({data:err}))
    })
}

controller.findUser = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    let user = authServices.decodeToken(token);
    getUserByUserName('username', user.username).then(user => {
        res.json(helper.responseBodySuccess({data:user}))
    }).catch(err => {
        res.status(500).json(helper.responseBodyInternalErro({data:err}))
    }
    )
}

controller.updateUserValue = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    let email = authServices.decodeToken(token).email;
    const { key, value } = req.body
    usecaseUpdateUserValue({email, key, value}).then(result => {
        res.json(helper.responseBodySuccess({data:result}))
    }).catch(err => {
        res.status(500).json(helper.responseBodyInternalErro({err}))
    }
    )
}

controller.register = (req, res, next) => {
    try {
        userValidator(userSchema)(req.body)
        getUserByUserName('username', req.body.username).then(user => {
            if (user) {
                res.status(400).json(helper.responseBodyErro({message:'Usuário já cadastrado'}))
            } else {
                usercaseRegisterUser(req.body).then(user => {
                    res.json(helper.responseBodySuccess({data:user}))
                }).catch(err => {
                    //res.status(400).json({ message: err.message })
                    throw err
                }
                )
            }
        }).catch(err => {
            throw err
        }
        )
    } catch (err) {
        console.log(err)
        res.status(400).json(helper.responseBodyErro({}))
    }
}

controller.login = (req, res, next) => {

    const { username, password } = req.body

    if (!(username) && !(password)) {
        res.status(400).json(helper.responseBodyErro({message:'username e password são obrigatórios'}));
    }
    usecaseLogin({username, password }).then(token => {
        res.json({token: token})
    }).catch(err => {
        if (err.message === 'CreditalInvalidError') {
            res.status(400).json(helper.responseBodyErro({message:'Credenciais inválidas'}))
        } else {
            res.status(500).json(helper.responseBodyInternalErro({}))
        }
    }
    )
}

module.exports = controller