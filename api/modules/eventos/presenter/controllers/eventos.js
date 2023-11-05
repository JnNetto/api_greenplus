const getEventos = require('../../domain/usecase/get-eventos/get_eventos')
const deleteEventos = require('../../../eventos/domain/usecase/delete-eventos/delete')
const postEvento = require('../../../eventos/domain/usecase/register-eventos/register')
const helper = require("../../../../core/helpers/response_body")

const controller = {}

controller.getAllEventos = (req, res, next) => {
    getEventos.usecaseGetEventos().then(cursos => {
        res.send(cursos)
    }).catch(err => {
        res.status(500).send(err)
    })
}

controller.getEventosCurso = (req, res, next) => {
    let id = req.params.idcurso

    getEventos.usecaseGetEventosCurso(id).then(
        eventos => {
            res.send(eventos)
        }).catch(err => {
            res.status(500).send(err)
        })
}

controller.register = (req, res, next) => {
    let id = req.params.idcurso

    postEvento.registerEvento(id, req.body).then(id => {
        res.status(201).send(id)
    }).catch(err => {
        res.status(500).send(err)
    })
}

controller.delete = (req, res, next) => {
    let idCurso = req.params.idcurso
    let idEvento = req.params.idevento

    deleteEventos.deleteEvento(idCurso, idEvento).then(id => {
        res.status(201).send(id)
    }).catch(err => {
        res.status(500).send(err)
    })
}

module.exports = controller
