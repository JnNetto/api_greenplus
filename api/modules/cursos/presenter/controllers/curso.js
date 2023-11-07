let getCourse = require('../../domain/usecase/get-cursos/get_curso')
let postCurso = require('../../domain/usecase/register/register');
const helper = require("../../../../core/helpers/response_body")
const controller = {}


controller.getAll = (req, res, next) => {
    getCourse.usecaseGetCursos().then(cursos => {
        res.status(200).send(helper.responseBodySuccess({data: cursos}))
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}

controller.getCurso = (req, res, next) => {
    let id = req.params.id;
    getCourse.getCourseById(id).then(
        curso => {
            if (!curso || curso.length === 0) {
                res.status(404).send(helper.responseBodyNotFound({}));
            } else {
                res.status(200).send(helper.responseBodySuccess({data: curso}));
            }
        }).catch(err => {
            res.status(500).send(helper.responseBodyInternalErro({}))
        })
}

controller.register = (req, res, next) => {
    postCurso.registerCurso(req.body).then(id => {
        if (id) {
            res.status(201).send(helper.responseBodyCreated({data: id}))
        } else [
            res.status(404).send(helper.responseBodyNotFound({}))
        ]
    }).catch(err => {
        res.status(500).send(helper.responseBodyInternalErro({}))
    })
}



module.exports = controller