const getHorarios = require('../../domain/usecase/get-horarios/get_horarios')
const putHorarios = require('../../../horarios/domain/usecase/put-horarios/put_horarios')
const helper = require("../../../../core/helpers/response_body")
const { boolean } = require('joi')

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
    let idCurso = req.params.idcurso
    console.log("Entrou aqui 1")
    putHorarios.substituirHorario(idCurso, req.body).then(novoHorario => {
        res.status(200).send(helper.responseBodySuccess({data : novoHorario}))
    }).catch(err => {
        console.log(err)
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

module.exports = controller
