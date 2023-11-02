let usecaseGetMenu = require('../../domain/usecase/get-menu')
const controller = {}

controller.getAll = (req, res, next) => {
    usecaseGetMenu().then(menu => {
        res.status(200).send(menu)
    }).catch(err => {
        res.status(500).send(err)
    })
}


module.exports = controller