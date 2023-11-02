let usecaseGetCurso = require('../../domain/usecase/get-cursos/get_curso')

const controller = {}

controller.getCurso = (req, res, next) => {
    let id = req.params.id;
    usecaseGetCurso(id).then(
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


module.exports = controller