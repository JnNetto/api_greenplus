let usecaseGetCursos = require('../../domain/usecase/get-cursos/get_cursos')

const controller = {}

controller.getAll = (req, res, next) => {
    usecaseGetCursos().then(cursos => {
        res.send(cursos)
    }).catch(err => {
        res.status(500).send(err)
    })
}


module.exports = controller