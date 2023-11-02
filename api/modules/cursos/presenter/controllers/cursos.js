let usecaseGetCursos = require('../../domain/usecase/get-cursos/get_cursos')
let registerCurso = require('../../domain/usecase/register/register');
const controller = {}

controller.getAll = (req, res, next) => {
    usecaseGetCursos().then(cursos => {
        res.status(200).send(cursos)
    }).catch(err => {
        res.status(500).send(err)
    })
}

controller.register = (req, res, next) => {
    registerCurso(req.body).then(id => {
        res.status(201).send(id)
    }).catch(err => {
        res.status(500).send(err)
    })
}


module.exports = controller