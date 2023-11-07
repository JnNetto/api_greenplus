let getMenu = require('../../domain/usecase/get-menu/get-menu')
let postMenu = require('../../domain/usecase/register/register')
const helper = require("../../../../core/helpers/response_body")
const controller = {}

controller.getAll = (req, res, next) => {
    getMenu.usecaseGetMenu().then(menu => {
        res.status(200).send(helper.responseBodySuccess({data: menu}))
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

controller.getMenu = (req, res, next) => {
    let id = req.params.idmenu

    getMenu.getIdMenu(id).then(
        menu => {
            if (!menu || menu.length === 0) {
                res.status(404).send(helper.responseBodyNotFound({}));
            } else {
                res.status(200).send(helper.responseBodySuccess({data: menu}));
            }
        }).catch(err => {
            res.status(500).send(helper.responseBodyInternalErro({}))
        })
}

controller.registerMenu = (req, res, next) => {
    postMenu.registerMenu(req.body).then(id => {
        res.status(201).send(helper.responseBodyCreated({data: id}))
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })}

module.exports = controller