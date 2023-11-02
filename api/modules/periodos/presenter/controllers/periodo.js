let usecaseGetPeriodo = require('../../domain/usecase/get-periodos/get_periodo')

const controller = {}

controller.getPeriodo = (req, res, next) => {
    let idCurso = req.params.id;
    let periodo = req.params.periodo

    usecaseGetPeriodo(idCurso, periodo)
        .then(
            periodo => {
                if (!periodo || periodo.length === 0) {
                    res.status(404).send('Periodo não encontrado');
                } else {
                    res.send(periodo);
                }
            }).catch(err => {
                res.status(500).send("Erro interno")
            })
}


module.exports = controller