//Use case get user
 let periodosDb = require('../../../../../reposotiry/periodos')
 let cursosDb = require('../../../../../reposotiry/cursos')
//let portersDb = require('../../../../../reposotiry/porters')

module.exports = getPeriodoById = async(idCurso, idPeriodo) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        // console.log(`curso ${curso}`)

        // console.log(`Periodos`)
        const periodos = await periodosDb.findPeriodoPorCurso(curso)

        const periodo = await periodosDb.findPeriodo(periodos, idPeriodo)
        // console.log(`periodo ${periodo}`)
        return periodo
    } catch (err) {
        throw err;
    }
}
