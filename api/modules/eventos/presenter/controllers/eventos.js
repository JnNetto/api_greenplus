const getEventos = require('../../domain/usecase/get-eventos/get_eventos')
const deleteEventos = require('../../../eventos/domain/usecase/delete-eventos/delete')
const postEvento = require('../../../eventos/domain/usecase/register-eventos/register')
const helper = require("../../../../core/helpers/response_body")

const controller = {}

controller.getAllEventos = (req, res, next) => {
    getEventos.usecaseGetEventos().then(eventos => {
        res.status(200).send(helper.responseBodySuccess({data: eventos}))
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

controller.getEventosCurso = (req, res, next) => {
    let id = req.params.idcurso

    getEventos.getEventosCurso(id).then(
        eventos => {
            if (!eventos || eventos.length === 0) {
                res.status(404).send(helper.responseBodyNotFound({}));
            } else {
                res.status(200).send(helper.responseBodySuccess({data: eventos}));
            }
        }).catch(err => {
            res.status(500).send(helper.responseBodyInternalErro({}))
        })
}

controller.register = (req, res, next) => {
    let id = req.params.idcurso

    postEvento.registerEvento(id, req.body).then(id => {
        if (id) {
            res.status(201).send(helper.responseBodyCreated({data: id}))
        } else {
            res.status(400).send(helper.responseBodyNotFound({}))
        }
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

controller.delete = (req, res, next) => {
    let idCurso = req.params.idcurso
    let idEvento = req.params.idevento

    deleteEventos.deleteEvento(idCurso, idEvento).then(id => {
        if (id) {
            res.status(204).send(helper.responseBodyNoContent({data:id}))
            console.log(id)
        } else {
            res.status(404).send(helper.responseBodyNotFound({}))
        }
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

module.exports = controller
