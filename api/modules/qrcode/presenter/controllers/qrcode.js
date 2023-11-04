let modulosQrcode = require('../../domain/usecase/get-qrcode/get-qrcode')
// let registerMenu = require('../../domain/usecase/register/register')

const controller = {}

controller.getAll = (req, res, next) => {
    modulosQrcode.usecaseGetQrcode().then(menu => {
        res.status(200).send(menu)
    }).catch(err => {
        res.status(500).send(err)
    })
}

//controller para pegar um qrcode específico

// controller.getMenu = (req, res, next) => {
//     let id = req.params.idMenu
//     modulosQrcode.getIdMenu(id).then(menu => {
//         res.status(200).send(menu)
//     }).catch(err => {
//         res.status(500).send(err)
//     })
// }

//controller para registrar um novo qrcode

// controller.registerMenu = (req, res, next) => {
//     registerMenu(req.body).then(id => {
//         res.status(201).send(id)
//     }).catch(err => {
//         res.status(500).send(err)
//     })}

module.exports = controller