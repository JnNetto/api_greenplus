let cursosDb = require('../../../../../reposotiry/cursos')
//let portersDb = require('../../../../../reposotiry/porters')

//retorna o id do curso registrado
module.exports = registerCurso = async (curso) => {
    try {
        const id = await cursosDb.register(curso);
        return id;
    } catch (err) {
        throw err;
    }
}
