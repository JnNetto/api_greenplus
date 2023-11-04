let modulosQrcode = require('../../domain/usecase/get-qrcode/get-qrcode')
const helper = require("../../../../core/helpers/response_body")
const controller = {}

controller.getAll = (req, res, next) => {
    modulosQrcode.usecaseGetQrcode().then(qrcode => {
        res.status(200).send(qrcode)
    }).catch(err => {
        res.status(500).send(err)
    })
}

// controller para pegar todos os Qrcodes de um curso

controller.getQrcodeCurso = (req, res, next) => {
    let id = req.params.idcurso

    modulosQrcode.getIdQrcodeCurso(id).then(qrcode => {
        res.status(200).send(qrcode)
    }).catch(err => {
        res.status(500).send(err)
    })
}

//controller para pegaro Qrcode por periodo
controller.getQrcodePeriodo = (req, res, next) => {
    let idCurso = req.params.idcurso;
    let idPeriodo = req.params.idperiodo

    console.log(idCurso, idPeriodo)
    modulosQrcode.getQrcodePorPeriodo(idCurso, idPeriodo)
        .then(
            qrcode => {
                if (!qrcode || qrcode.length === 0) {
                    res.status(404).send(helper.responseBodyNotFound({message: "Periodo não encontrado"}));
                } else {
                    res.send(helper.responseBodySuccess({data: qrcode}));
                }
            }).catch(err => {
                res.status(500).send("Erro interno")
            })
}

//controller para registrar um novo qrcode

// controller.registerMenu = (req, res, next) => {
//     registerMenu(req.body).then(id => {
//         res.status(201).send(id)
//     }).catch(err => {
//         res.status(500).send(err)
//     })}

module.exports = controller