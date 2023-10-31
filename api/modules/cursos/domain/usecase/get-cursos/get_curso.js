//Use case get user
 let cursosDb = require('../../../../../reposotiry/cursos')
//let portersDb = require('../../../../../reposotiry/porters')

// module.exports = getCourseById = async (id) => {
//     return cursosDb.findId(id).then(idCurso => {
//         return idCurso
//     }).catch(err => {
//         throw err
//     })
// }

module.exports = getCourseById = async(id) => {
    try {
        const idCurso = await cursosDb.findId(id);
        return idCurso;
    } catch (err) {
        throw err;
    }
}
