let modulosMenu = require('../../domain/usecase/get-menu')
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

module.exports = controller