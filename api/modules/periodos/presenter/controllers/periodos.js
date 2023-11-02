let usecaseGetCursos = require('../../domain/usecase/get-periodos/get_periodos')

const controller = {}

controller.getAll = (req, res, next) => {
    usecaseGetCursos().then(cursos => {
        res.send(cursos)
    }).catch(err => {
        res.status(500).send(err)
    })
}


module.exports = controller