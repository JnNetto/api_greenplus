//Use case get users (list all users)
let cursosDb = require('../../../../../reposotiry/cursos')

module.exports = usecaseGetCursos = async () => {
    return cursosDb.listCursos().then(cursos => {
        return cursos
    }).catch(err => {
        throw err
    })
}