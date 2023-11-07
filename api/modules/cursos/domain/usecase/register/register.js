let cursosDb = require('../../../../../reposotiry/cursos')
//let portersDb = require('../../../../../reposotiry/porters')

//retorna o id do curso registrado
let registerCurso = async (curso) => {
    try {
        const id = await cursosDb.register(curso);
        return id;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    registerCurso
}
