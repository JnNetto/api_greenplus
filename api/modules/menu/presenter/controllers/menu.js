let modulosMenu = require('../../domain/usecase/get-menu')
let registerMenu = require('../../domain/usecase/register/register')

const controller = {}

controller.getAll = (req, res, next) => {
    modulosMenu.usecaseGetMenu().then(menu => {
        res.status(200).send(menu)
    }).catch(err => {
        res.status(500).send(err)
    })
}

controller.getMenu = (req, res, next) => {
    let id = req.params.idMenu
    modulosMenu.getIdMenu(id).then(menu => {
        res.status(200).send(menu)
    }).catch(err => {
        res.status(500).send(err)
    })
}

controller.registerMenu = (req, res, next) => {
    registerMenu(req.body).then(id => {
        res.status(201).send(id)
    }).catch(err => {
        res.status(500).send(err)
    })}

module.exports = controller