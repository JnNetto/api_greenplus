//Use case get user
 let cursosDb = require('../../../../../reposotiry/cursos')
//let portersDb = require('../../../../../reposotiry/porters')

//retorna o curso pelo ID
module.exports = getCourseById = async(id) => {
    try {
        const curso = await cursosDb.findId(id);
        return curso;
    } catch (err) {
        throw err;
    }
}
