//Use case get user
 let cursosDb = require('../../../../../reposotiry/cursos')

//retorna o curso pelo ID
let getCourseById = async(id) => {
    try {
        const curso = await cursosDb.findId(id);
        return curso;
    } catch (err) {
        throw err;
    }
}

//retornar todos os cursos
let usecaseGetCursos = async () => {
    return cursosDb.listCursos().then(cursos => {
        return cursos
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getCourseById,
    usecaseGetCursos
}
