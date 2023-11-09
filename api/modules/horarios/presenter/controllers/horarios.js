const getHorarios = require('../../domain/usecase/get-horarios/get_horarios')
const putHorarios = require('../../../horarios/domain/usecase/put-horarios/put_horarios')
const helper = require("../../../../core/helpers/response_body")

const controller = {}

controller.getHorariosCurso = (req, res, next) => {
    let id = req.params.idcurso
    getHorarios.getHorariosCurso(id).then(
        horarios => {
            if (!horarios || horarios.length === 0) {
                res.status(404).send(helper.responseBodyNotFound({}));
            } else {
                res.status(200).send(helper.responseBodySuccess({data: horarios}));
            }
        }).catch(err => {
            res.status(500).send(helper.responseBodyInternalErro({}))
        })
}

controller.substituirHorario = (req, res, next) => {
    let id= req.params.idcurso

    putHorarios.substituirHorario(id,req.body.pdf).then(result => {
        if (id) {
            res.status(200).send(helper.responseBodyCreated({data: result}))
        } else {
            res.status(400).send(helper.responseBodyNotFound({}))
        }
    }).catch(err => {
        console.log(err)
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
