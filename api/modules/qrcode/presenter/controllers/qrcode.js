let getQrCode = require('../../domain/usecase/get-qrcode/get-qrcode')
let postQrCode = require('../../domain/usecase/register-qrcode/register')
let deleteQrCode = require('../../domain/usecase/delete-qrcode/delete')
const helper = require("../../../../core/helpers/response_body")
const controller = {}

controller.getAll = (req, res, next) => {
    getQrCode.usecaseGetQrcode().then(qrcode => {
        res.status(200).send(helper.responseBodySuccess({code: qrcode}))
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}


controller.getQrcodeCurso = (req, res, next) => {
    let id = req.params.idcurso

    getQrCode.getIdQrcodeCurso(id).then(
        qrcode => {
            if (!qrcode || qrcode.length === 0) {
                res.status(404).send(helper.responseBodyNotFound({}));
            } else {
                res.status(200).send(helper.responseBodySuccess({data: qrcode}));
            }
        }).catch(err => {
            res.status(500).send(helper.responseBodyInternalErro({}))
        })
}

controller.getQrcodePeriodo = (req, res, next) => {
    let idCurso = req.params.idcurso;
    let idPeriodo = req.params.idperiodo

    getQrCode.getQrcodePorPeriodo(idCurso, idPeriodo).then(
        qrcode => {
            if (!qrcode || qrcode.length === 0) {
                res.status(404).send(
                    helper.responseBodyNotFound({})
                );
            } else {
                res.status(200).send(helper.responseBodySuccess({ data: qrcode }));
            }
        }).catch(err => {
            res.status(500).send(helper.responseBodyInternalErro({}))
        })
}

controller.register = (req, res, next) => {
    let idCurso = req.params.idcurso
    let idPeriodo = req.params.idperiodo

    postQrCode.registerQrCode(idCurso, idPeriodo, req.body).then(id => {
        if (id) {
            res.status(201).send(helper.responseBodyCreated({ data: id }))
        } else {
            res.status(404).send(helper.responseBodyNotFound({}))
        }
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

controller.delete = (req, res, next) => {
    let idCurso = req.params.idcurso
    let idPeriodo = req.params.idperiodo
    let idQrCode = req.params.idqrcode

    deleteQrCode.deleteQrCode(idCurso, idPeriodo, idQrCode).then(id => {
        if (id){
            res.status(204).send(helper.responseBodyNoContent({ data: id }))
        } else {
            res.status(404).send(helper.responseBodyNotFound({}))
        }
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

module.exports = controller