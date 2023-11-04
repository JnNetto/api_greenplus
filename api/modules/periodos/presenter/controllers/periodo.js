let getPeriodo = require('../../domain/usecase/get-periodos/get_periodo')
const helper = require("../../../../core/helpers/response_body")
const controller = {}

controller.getPeriodo = (req, res, next) => {
    let idCurso = req.params.id;
    let periodo = req.params.periodo

    getPeriodo.getPeriodoById(idCurso, periodo)
        .then(
            periodo => {
                if (!periodo || periodo.length === 0) {
                    res.status(404).send(helper.responseBodyNotFound({message: "Periodo não encontrado"}));
                } else {
                    res.send(helper.responseBodySuccess({data: periodo}));
                }
            }).catch(err => {
                res.status(500).send("Erro interno")
            })
}

controller.getAll = (req, res, next) => {
    getPeriodo.usecaseGetPeriodos().then(cursos => {
        res.send(cursos)
    }).catch(err => {
        res.status(500).send(err)
    })
}

controller.getPeriodosCurso = (req, res, next) => {
    let id = req.params.idcurso

    getPeriodo.getPeriodos(id).then(
        periodos => {
            res.send(periodos)
        }).catch(err => {
            res.status(500).send(err)
        })
}


module.exports = controller
