let getCourse = require('../../domain/usecase/get-cursos/get_curso')
let registerCurso = require('../../domain/usecase/register/register');

const controller = {}

controller.getCurso = (req, res, next) => {
    let id = req.params.id;
    getCourse.getCourseById(id).then(
        curso => {
            if (!curso || curso.length === 0) {
                res.status(404).send('Curso não encontrado');
            } else {
                res.send(curso);
            }
        }).catch(err => {
            res.status(500).send(err)
        })
}

controller.getAll = (req, res, next) => {
    getCourse.usecaseGetCursos().then(cursos => {
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