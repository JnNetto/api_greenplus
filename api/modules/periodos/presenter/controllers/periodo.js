let getPeriodo = require('../../domain/usecase/get-periodos/get_periodo')
const helper = require("../../../../core/helpers/response_body")
const controller = {}


controller.getAll = (req, res, next) => {
    getPeriodo.usecaseGetPeriodos().then(cursos => {
        res.status(200).send(helper.responseBodySuccess({data: cursos}))
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

controller.getPeriodosCurso = (req, res, next) => {
    let id = req.params.idcurso
    
    getPeriodo.getPeriodos(id).then(
        periodos => {
            if (!periodos || periodos.length === 0) {
                res.status(404).send(helper.responseBodyNotFound({}));
            } else {
                res.status(200).send(helper.responseBodySuccess({data: periodos}));
            }
        }).catch(err => {
            res.status(500).send(helper.responseBodyInternalErro({}))
        })
}

controller.getPeriodo = (req, res, next) => {
    let idCurso = req.params.id;
    let periodo = req.params.periodo

    getPeriodo.getPeriodoById(idCurso, periodo)
        .then(
            periodo => {
                if (!periodo || periodo.length === 0) {
                    res.status(404).send(helper.responseBodyNotFound({}));
                } else {
                    res.status(200).send(helper.responseBodySuccess({data: periodo}));
                }
            }).catch(err => {
                res.status(500).send(helper.responseBodyInternalErro({}))
            })
}


module.exports = controller
