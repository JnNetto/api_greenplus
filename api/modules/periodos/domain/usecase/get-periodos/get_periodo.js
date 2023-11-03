//Use case get user
 let periodosDb = require('../../../../../reposotiry/periodos')
 let cursosDb = require('../../../../../reposotiry/cursos')

let getPeriodoById = async(idCurso, idPeriodo) => {
    try {
        const curso = await cursosDb.findIdCurso(idCurso)
        const periodos = await periodosDb.findPeriodoPorCurso(curso)
        const periodo = await periodosDb.findPeriodo(periodos, idPeriodo)

        return periodo
    } catch (err) {
        throw err
    }
}

let usecaseGetPeriodos = async () => {
    return periodosDb.listPeriodos().then(cursos => {
        return cursos
    }).catch(err => {
        throw err
    })
}

let getPeriodos = async(idCurso) => {
    try{
        const curso = await cursosDb.findIdCurso(idCurso)
        const periodos = await periodosDb.findPeriodoPorCurso(curso)
        
        return periodos
    } catch (err) {
        throw err
    }
}


module.exports = {
    getPeriodoById,
    usecaseGetPeriodos,
    getPeriodos
}